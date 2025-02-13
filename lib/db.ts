import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var mongooseInstance: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongooseInstance;

if (!cached) {
  cached = global.mongooseInstance = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached?.conn) {
    return cached.conn;
  }

  if (!cached?.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached = global.mongooseInstance = {
      ...cached,
      promise: mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose;
      })
    };
  }

  try {
    const conn = await cached.promise;
    cached.conn = conn;
    return conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

// For CommonJS compatibility
if (typeof module !== 'undefined') {
  module.exports = { connectDB };
} 