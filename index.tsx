import { h, render } from "preact";

const App = () => (
  <div>
    <h1>Hello World from Preact+TS! 📦 🚀</h1>
  </div>
);

const node = document.getElementById("root");
render(<App />, node!, node!.lastChild as Element);
