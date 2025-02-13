import { connectDB } from "@/lib/db";
import Career from "@/models/Career";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();
    console.log("MongoDB connected successfully");
    
    const careers = await Career.find({}).sort({ createdAt: -1 });
    console.log("Careers fetched:", careers.length);
    
    return NextResponse.json(careers);
  } catch (error) {
    console.error("Error in GET /api/careers:", error);
    return NextResponse.json(
      { error: "Failed to fetch careers" }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const career = await Career.create(data);
    return NextResponse.json(career);
  } catch (error) {
    console.error("Error in POST /api/careers:", error);
    return NextResponse.json(
      { error: "Failed to create career" },
      { status: 500 }
    );
  }
} 