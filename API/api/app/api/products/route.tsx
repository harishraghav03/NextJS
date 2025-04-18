import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2 },
    { id: 2, name: "Butter", price: 4 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  console.log(validation.error?.errors);
  if (!validation.success)
    return NextResponse.json(
      { errors: validation.error?.errors.map((err) => err.message) },
      { status: 404 }
    );
  return NextResponse.json({ id: 1, name: "Milk", price: 2 }, { status: 201 });
}
