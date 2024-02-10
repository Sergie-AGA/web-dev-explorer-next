import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface ISetParams {
  [key: string]: any;
}

export default function useURLState() {
  const searchParams = useSearchParams();

  if (!searchParams.toString()) {
    return;
  }

  return Object.fromEntries(
    searchParams
      .toString()
      .split("&")
      .map((pair) => {
        const [key, value] = pair.split("=");
        return [key, decodeURIComponent(value.replace(/\+/g, "%20"))];
      })
  );
}
