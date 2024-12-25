import { useRouter, useSearchParams } from "next/navigation";

export function useQueryRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = (defaultPath: string = "/") => {
    const redirectPath = searchParams.get("redirect");
    if (redirectPath) {
      router.push(redirectPath);
    } else {
      router.push(defaultPath);
    }
  };

  return redirect;
}
