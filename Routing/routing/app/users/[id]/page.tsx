import React from "react";

interface Props {
  params: { id: number };
}

export default async function UsersDetailsPage({ params }: Props) {
  const { id } = await params;

  // This fetching params will only work in Pages
  return <div>UsersDetailsPage {id}</div>;
}
