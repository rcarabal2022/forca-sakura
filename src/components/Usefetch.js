import { useState, useEffect } from 'react';

const useFetch =  (url, header) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const abortCont = new AbortController();

      setTimeout(() => {
      fetch(url, header, { signal: abortCont.signal })
          .then(res => {
                            if (!res.ok) {
                                throw Error('could not fetch the data for that resource');
                            }
                            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              setIsPending(false);
              setError(err.message);
            }
          })
          .finally(() => {
            setIsPending(false);
            setError(null);
          })
      }, 1000);

      // abort the fetch
      return () => abortCont.abort();
    }, [url,header])

    return {data, isPending, error};
}

export default useFetch;