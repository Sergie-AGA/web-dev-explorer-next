"use client";

import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="fixed left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-4">
      <h2>Something went wrong!</h2>
      <Link className="hover:underline" href="/">
        Return to safety
      </Link>
    </div>
  );
}
