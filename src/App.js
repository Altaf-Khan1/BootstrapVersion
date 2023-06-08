import "./App.css";

// import "./components/Scroll.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Bar from "./components/bar/Bar";
import SectionS from "./components/sectionS/SectionS";
import SectionT from "./components/sectionT/SectionT";
import SectionF from "./components/sectionF/SectionF";
import Section from "./components/section/Section";
import SectionFi from "./components/sectionFi/SectionFi";
import SectionSi from "./components/sectionSi/SectionSi";
import SectionSe from "./components/sectionSe/SectionSe";
import SectionEi from "./components/sectionEi/SectionEi";
import SectionN from "./components/sectionN/SectionN";



function App() {
  return (
    <header>
      <Bar/>
      <SectionS />
      <SectionT />
      <Section />
      <SectionF />
      <SectionFi />
      <SectionSi />
      <SectionSe />
      <SectionEi />
      <SectionN />
    </header>
  );
}

export default App;
