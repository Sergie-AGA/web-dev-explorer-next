export default async function api(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiPrefix = "/api";
  const url = new URL(apiPrefix.concat(path), baseUrl);
  return await fetch(url, init);
}
