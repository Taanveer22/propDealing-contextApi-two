import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h3>uncle</h3>
      <section className="flex">
        <Cousin name="shakib"></Cousin>
        <Cousin name="tamim"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
