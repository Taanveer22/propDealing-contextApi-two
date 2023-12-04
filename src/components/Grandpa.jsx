import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Grandpa.css";
import { createContext, useState } from "react";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext();

const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa">
      <h2>grandpa</h2>
      <p>net money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
