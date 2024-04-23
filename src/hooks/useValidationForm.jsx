import { useEffect, useState } from "react";

const useGetPremiers = (API) => {
  const [premiers, setPremiers] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setPremiers(data.premieres));
  }, []);

  return premiers;
};

export default useGetPremiers;
