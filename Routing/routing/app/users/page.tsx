import React from "react";
import Hola from "./Hola";
import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable sortOrder={sortOrder} />
      <Hola />
    </>
  );
};

export default UsersPage;
