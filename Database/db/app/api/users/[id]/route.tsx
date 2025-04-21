import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const user = await prisma.users.findUnique({
    where: { id },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });

  return NextResponse.json(user);
}
