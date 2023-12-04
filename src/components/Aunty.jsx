import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>aunty</h3>
      <section className="flex">
        <Cousin name="safa"></Cousin>
        <Cousin name="toya"></Cousin>
      </section>
      <p>given money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>add more money</button>
    </div>
  );
};

export default Aunty;
