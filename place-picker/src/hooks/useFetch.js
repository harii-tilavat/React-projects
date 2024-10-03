import { useEffect, useState } from "react";
function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Faild to fetching data!" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, []);
  return {
    isFetching,
    error,
    fetchedData,
    setFetchedData
  };
}
export default useFetch;
