import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Aksel",
      animal: "Dog/shit pig",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      name: "Hachi",
      animal: "Dog/Kitty",
      breed: "Akita",
    }),
    React.createElement(Pet, {
      name: "Scout",
      animal: "Cat",
      breed: "Tuxedo",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
