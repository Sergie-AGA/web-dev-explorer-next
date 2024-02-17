import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-4">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="hover:underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
