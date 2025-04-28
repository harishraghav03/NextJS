import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // Accessing session on the server
  const session = await getServerSession(authOptions);
  return (
    <div className="flex bg-slate-200 p-3">
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
    </div>
  );
}
