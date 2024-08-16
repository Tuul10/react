const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese",
    ],
  },
];

const Para = (props) => {
  const { name } = props;
  return <h3>{name}</h3>;
};

const Ingredient = (props) => {
  const { name, amount, measurement } = props;
  return (
    <ul>
      <li>
        {name} {amount} {measurement}
      </li>
    </ul>
  );
};
const Step = (props) => {
  const { name } = props;
  console.log(name);
  return <p>{name}</p>;
};

export default function Recipes2() {
  return (
    <div>
      <h1>Delicious Resipes</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Para name={item.name} />
            {item.ingredients.map((ingredient, index) => {
              return (
                <Ingredient
                  key={index}
                  name={ingredient.name}
                  amount={ingredient.amount}
                  measurement={ingredient.measurement}
                />
              );
            })}
            {item.steps.map((step, index) => {
              return <Step key={index} name={step} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
// const items = [1, 2, 3];

// items.map((item) => {
//   return item;
// });

// const items2 = [
//   {
//     text: 1,
//     items: [1, 2, 3],
//   },
//   {
//     text: 1,
//     items: [1, 2, 3],
//   },
// ];

// items2.map((item) => {
//   return (
//     <div>
//       <p>{item.text}</p>
//       {item.items.map((insideItem) => {
//         return <p>{insideItem}</p>;
//       })}
//     </div>
//   );
// });
