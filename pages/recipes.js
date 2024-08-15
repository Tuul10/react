// import Steps from "./Delicious Recipes/Steps";

const ingredients = [
  { id: 1, text: "Salmon", amount: 1, measurement: "l lb" },
  { id: 2, text: "Pine Nuts", amount: 1, measurement: "cup" },
  { id: 3, text: "Butter Lettuce", amount: 2, measurement: "cups" },
  { id: 4, text: "Yellow Squash", amount: 1, measurement: "med" },
  { id: 5, text: "Olive Oil", amount: 0.5, measurement: "cup" },
  { id: 6, text: "Garlic", amount: 3, measurement: "cloves" },
];
const steps = [
  { id: 1, text: "Preheat the oven to 350 degrees." },
  { id: 2, text: "Spread the olive oil around a glass baking dish." },
  { id: 3, text: "Add the salmon, garlic, and pine nuts to the dish." },
  { id: 4, text: "Bake for 15 minutes." },
  {
    id: 5,
    text: "Add the yellow squash and put back in the oven for 30 mins.",
  },
  {
    id: 6,
    text: "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
  },
];
const ingredients2 = [
  { text: "Whitefish", amount: 1, measurement: "l lb" },
  { text: "Cheese", amount: 1, measurement: "cup" },
  { text: "Iceberg Lettuce", amount: 2, measurement: "cups" },
  { text: "Tomatoes", amount: 2, measurement: "large" },
  { text: "Tortillas", amount: 3, measurement: "med" },
];
const steps2 = [
  { id: 1, text: "Cook the fish on the grill until hot." },
  { id: 2, text: "Place the fish on the 3 tortillas." },
  { id: 3, text: "Top them with lettuce, tomatoes, and cheese" },
];
const Para = (props) => {
  const { text } = props;
  return <p>{text}</p>;
};
const List = (props) => {
  const { text } = props;
  return <li>{text}</li>;
};

export default function Recipes() {
  return (
    <div>
      <h1>Delicious Resipes</h1>
      <h3>Baked salmon</h3>
      {ingredients.map((ingredient) => {
        return <List key={ingredient.id} text={ingredient.text} />;
      })}
      <h3>Cooking Intraction</h3>
      {steps.map((step) => {
        return <Para key={step.id} text={step.text} />;
      })}
      <h3>Fish Tacos</h3>
      {ingredients2.map((ingredient2) => {
        return <List key={ingredient2.index} text={ingredient2.text} />;
      })}
      <h3>Cooking Intraction</h3>
      {steps2.map((step2) => {
        return <Para key={step2.id} text={step2.text} />;
      })}
    </div>
  );
}
