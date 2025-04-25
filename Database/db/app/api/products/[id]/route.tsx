import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { id } = await params;

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error?.errors[0].message },
      { status: 400 }
    );

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });

  if (!product) return NextResponse.json("Product not found", { status: 400 });

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(
  request: NextResponse,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });

  if (!product) return NextResponse.json("Product not found", { status: 400 });

  await prisma.product.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json("Product Deleted Successfully");
}
