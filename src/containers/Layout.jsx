import PropTypes from "prop-types";
import Headers from "../components/Headers";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <div className="flex flex-col">
      <Headers />
      {children}
    </div>
  );
};

export default Layout;
