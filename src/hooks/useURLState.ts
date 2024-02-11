import { useSearchParams } from "next/navigation";

export default function useURLState({ queryAsArray = false } = {}) {
  const searchParams = useSearchParams();

  if (!searchParams.toString()) {
    return;
  }

  const query = Object.fromEntries(
    searchParams
      .toString()
      .split("&")
      .map((pair) => {
        const [key, value] = pair.split("=");
        return [key, decodeURIComponent(value.replace(/\+/g, "%20"))];
      })
  );

  if (queryAsArray) {
    for (const key in query) {
      query[key] = query[key].split(",");
    }

    return query;
  }

  return query;
}
