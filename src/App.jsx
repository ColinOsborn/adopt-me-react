import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Aksel" animal="dog" breed="Golden Retriever" />
    <Pet name="Hachi" animal="dog" breed="Akita" />
    <Pet name="Scout" animal="cat" breed="Tuxedo" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
