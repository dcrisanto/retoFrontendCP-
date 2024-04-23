import useGetPremiers from "../hooks/useGetPremiers";
import PremierItem from "../components/PremierItem";
import "../styles/style.scss";

const API = "https://cp-staging.onrender.com/v1/premieres";

const PremierList = () => {
  const premiers = useGetPremiers(API);
  console.log(premiers);

  return (
    <section className="premier-list-section flex items-center mt-20 w-full">
      <div className="cards w-full flex flex-col gap-24 items-center">
        {premiers?.map((premier) => {
          return (
            <PremierItem premier={premier} key={premier.description - 0} />
          );
        })}
      </div>
    </section>
  );
};

export default PremierList;
