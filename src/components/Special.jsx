import { useContext } from "react";
import { AssetContext } from "./Grandpa";


const Special = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h3>special</h3>
            <p>has: {gift}</p>
        </div>
    );
};

export default Special;