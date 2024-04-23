import "../styles/style.scss";
import useGetCandyStore from "../hooks/useGetCandyStore";
import CardCandyStore from "../components/CardCandyStore";

const API = "https://cp-staging.onrender.com/v1/candystore";

const CardsCandySotoreList = () => {
  const candyStoreList = useGetCandyStore(API);
  console.log(candyStoreList);

  return (
    <section className="section-candy-store-list flex justify-center mt-10">
      <div className="flex justify-center flex-wrap gap-4">
        {candyStoreList?.map((product) => {
          return <CardCandyStore product={product} key={product.name - 0} />;
        })}
      </div>
    </section>
  );
};

export default CardsCandySotoreList;
