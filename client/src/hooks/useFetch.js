import React from "react";
import { useState, useEffect } from "react";
function useFetch() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:5000/posts";

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from that resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 5);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
