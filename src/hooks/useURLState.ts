import { useSearchParams } from "next/navigation";

type QueryObject = { [key: string]: string | string[] };

interface IOptions {
  queryAsArray?: boolean;
}

export function useURLState(options?: IOptions) {
  const searchParams = useSearchParams();

  if (!searchParams.toString()) {
    return {};
  }
  const query = Object.fromEntries(
    searchParams
      .toString()
      .split("&")
      .map((pair) => {
        const [key, value] = pair.split("=");
        return [key, decodeURIComponent(value.replace(/\+/g, "%20"))];
      })
  ) as QueryObject;

  if (options?.queryAsArray) {
    for (const key in query) {
      if (typeof query[key] === "string" && key !== "text") {
        query[key] = (query[key] as string).split(",");
      }
    }
  }

  return query;
}

interface UrlParams {
  [key: string]: string | string[];
}

export function generateQueryString(urlParams: UrlParams): string {
  const queryString = Object.keys(urlParams)
    .map((type) => {
      if (Array.isArray(urlParams[type])) {
        return `${type}=${(urlParams[type] as string[]).join(",")}`;
      } else {
        return `${type}=${urlParams[type]}`;
      }
    })
    .join("&");

  return `?${queryString}`;
}
