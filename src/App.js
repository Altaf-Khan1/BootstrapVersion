import "./App.css";

// import "./components/Scroll.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Bar from "./components/Bar";
import SectionS from "./components/SectionS";
import SectionT from "./components/SectionT";
import SectionF from "./components/SectionF";
import Section from "./components/section/Section";



function App() {
  return (
    <header>
      <Bar/>
      <SectionS />
      <SectionT />
      <Section />
      <SectionF />
    </header>
  );
}

export default App;
