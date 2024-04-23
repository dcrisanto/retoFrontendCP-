import { useEffect, useState } from "react";

const useGetCandyStore = (API) => {
  const [candyStore, setCandyStore] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCandyStore(data.items));
  }, []);

  return candyStore;
};

export default useGetCandyStore;
