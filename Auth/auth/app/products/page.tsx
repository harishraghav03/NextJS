"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Products() {
  // Accessing session on the client
  const { status, data: session } = useSession();
  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex bg-slate-200 p-3">
      {status === "unauthenticated" || !session ? (
        <Link href="/api/auth/signin">Login</Link>
      ) : (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
}
