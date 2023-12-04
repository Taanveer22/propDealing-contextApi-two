import Friend from "./Friend";
import { PropTypes } from "prop-types";

const Cousin = ({ name }) => {
  return (
    <div>
      <h3>cousin</h3>
      {name}
      {name === "toya" && <Friend></Friend>}
    </div>
  );
};

Cousin.propTypes = {
  name: PropTypes.string,
};

export default Cousin;
