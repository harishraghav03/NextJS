import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      {/* The request made here is for downloading content for the users page, not re-downloading CSS, JS, or icons. This is called client-side navigation. */}
      <ProductCard />
    </main>
  );
}
