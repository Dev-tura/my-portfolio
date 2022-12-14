import React from "react";
import Headerr from "./Components/Headerr/Headerr";
import Heropage from "./Components/Heropage/Heropage";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Drop from "./Components/Drop/drop";
import Portfolio from "./Components/Portfolio/Portfolio";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Headerr />
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="drop" element={<Drop />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        {/* <Route path="about" element={< />} /> */}
      </Routes>
    </BrowserRouter>
    // <Router>
    //   <nav>
    //     <Link to="/">Drop</Link>
    //   </nav>
    // <div className="first1">
    //   {/* <Headerr /> */}
    //   <Heropage />
    //   <div className="first2">
    //     <Routes>
    //       < Route path="/" element={<Drop />} />
    //     </Routes>
    //   </div>
    // </div>
    // </Router>
  );
}

export default App;
