import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        setIsPending(false);
        setData(await res.json());
      } catch (err) {
        setIsPending(false);
      }
    })();
  }, [url]);
  return { data, isPending };
};
