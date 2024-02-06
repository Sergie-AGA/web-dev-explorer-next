import axios from "axios";
import apis from "@/config/apis";
import { useEffect, useState } from "react";

interface FetchResult {
  loading: boolean;
  data: any; // Replace 'any' with the actual type of your data
  error: boolean;
  refetch: (arg0: string) => void;
}

export function useFetch(
  url: string | undefined,
  handleSlow?: (value: boolean) => void
): FetchResult {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [resource, setResource] = useState(url);
  const [trigger, setTrigger] = useState(0);

  if (handleSlow) {
    const slowHandler = setInterval(() => {
      handleSlow(true);
    }, 5000);
  }

  useEffect(() => {
    if (resource) {
      const controller = new AbortController();

      setTimeout(() => {
        setLoading(true);

        axios
          .get(apis[resource], { signal: controller.signal })
          .then((response) => {
            console.log("Response:", response.data);
            setData(response.data?.attributes?.[resource]);
          })
          .catch((error) => {
            setError(true);
            console.error("Error:", error);
          })
          .finally(() => {
            setLoading(false);
            handleSlow?.(false);
          });
      }, 180);
      return () => {
        controller.abort();
      };
    } else {
      setLoading(false);
    }
  }, [resource, trigger]);

  function refetch(url: string) {
    setResource(url);
    setTrigger((prev) => prev + 1);
  }

  return { loading, data, error, refetch };
}
