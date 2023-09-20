import { Aside } from "../Aside";
import { Section } from "../Section";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Aside />
        <main>
          <Section />
        </main>
      </div>
    </div>
  );
};
