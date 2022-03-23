import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setIsPending(false);
        setData(res);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err);
      });
  }, []);
  return data;
};
