import React, { Suspense } from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new">New User</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
