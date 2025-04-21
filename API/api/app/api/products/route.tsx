import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { error } from "console";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2 },
    { id: 2, name: "Butter", price: 4 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { errors: validation.error?.errors[0].message },
      { status: 400 }
    );
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}
