import { useState } from "react";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<object>({});

  const request = async (
    url: string,
    method: string,
    body: string,
    headers: HeadersInit
  ) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, request };
};
