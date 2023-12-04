import { useContext } from "react";
import { MoneyContext } from "./Grandpa";

const Brother = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h3>brother</h3>
      <p>grandpa money: {money}</p>
    </div>
  );
};

export default Brother;
