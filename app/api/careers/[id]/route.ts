import { connectDB } from "@/lib/db";
import Career from "@/models/Career";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const data = await request.json();
    const career = await Career.findByIdAndUpdate(params.id, data, { new: true });
    return NextResponse.json(career);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update career" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await Career.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Career deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete career" },
      { status: 500 }
    );
  }
} 