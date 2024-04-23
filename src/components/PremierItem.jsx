import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PremierItem = ({ premier }) => {
  const navigate = useNavigate();
  PremierItem.propTypes = {
    premier: PropTypes.object,
  };

  const handleClick = (item) => {
    console.log(item);
    navigate("/login");
  };

  return (
    <div className="premier-item flex gap-8 bg-white cursor-pointer w-80 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-full">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black m-2 text-sm px-2 py-0.5">
          Premier
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={premier.image}
          alt="premier"
          onClick={() => handleClick(premier)}
        />
      </figure>
      <div className="premier-info flex flex-col gap-8 justify-center">
        <p className="text-title text-lg font-light">{premier.description}</p>
      </div>
    </div>
  );
};

export default PremierItem;
