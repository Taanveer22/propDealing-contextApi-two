import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Friend = () => {
    const  gift = useContext(AssetContext);
  return (
    <div>
          <h3>friend</h3>
          <p>has: {gift}</p>
    </div>
  );
};

export default Friend;
