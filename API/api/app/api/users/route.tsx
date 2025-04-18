// Route Handler - Handles HTTP GET requests

import { NextRequest, NextResponse } from "next/server";

// If we remove the request parameter, Next.js will cache the response.
// To prevent this, we should define the request parameter explicitly.
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Harish Raghav" },
    { id: 2, name: "Yazhini Hari" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
