import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

export default async function UsersDetailsPage({ params }: Props) {
  const { id } = await params;
  if (id > 10) notFound();

  // This fetching params will only work in Pages
  return <div>UsersDetailsPage {id}</div>;
}
