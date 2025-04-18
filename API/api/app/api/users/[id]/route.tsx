import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;

  // Validate the request Body
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Harish Raghav" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  // Validate the request Body
  const body = await request.json();
  // If not found, return the 404
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: "Name is required" }, { status: 404 });
  // Fetch the user with the given ID
  // If not, return 404
  if (id > 10)
    return NextResponse.json(
      { error: validation.error?.errors.message },
      { status: 404 }
    );
  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;

  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ message: "User deleted successfully" });
}
