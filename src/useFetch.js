import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        setIsPending(false);
        setData(await res.json());
      } catch (err) {
        setIsPending(false);
        setError(err);
      }
    })();
  }, [url]);
  return { data, isPending };
};
