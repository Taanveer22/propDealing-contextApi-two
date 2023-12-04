import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div>
      <h3>dad</h3>
      <section className="flex">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
