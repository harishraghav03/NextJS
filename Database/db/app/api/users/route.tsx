import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: validation.error.errors[0].message });
  }

  const user = await prisma.users.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );

  const newUser = await prisma.users.create({
    data: {
      // Attacker may include a malicious field
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}