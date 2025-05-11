import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-r0w">
      <h1 className="text-4xl">Easy Recipe Book</h1>
      <Link href="/addRecipe" className="text-3xl">
        Add Recipe
      </Link>
    </div>
  );
}
