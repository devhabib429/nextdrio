import { connectDB } from "@/lib/db";
import Inquiry from "@/models/Inquiry";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const inquiry = await Inquiry.create(data);
    return NextResponse.json(inquiry);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create inquiry" }, { status: 500 });
  }
} 