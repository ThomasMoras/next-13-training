import Link from "next/link";
import ProductCard from "./users/components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <ProductCard></ProductCard>
      <Link href="/users">Users</Link>
    </main>
  );
}
