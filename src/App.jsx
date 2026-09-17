import Home from "./Pages/Home";
import Footer from "./Componants/Footer";
import Contact from "./Pages/Contact";

import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";

import Navbar from "./Componants/Navbar";

import FAQ from "./Pages/FAQ";

import AboutInstructor from "./Componants/MentorSection";

import AmazonTopics from "./Componants/AmazonTopics";
import DeveloperCredit from "./Componants/DeveloperCredit";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<AmazonTopics />} />
          <Route path="/about" element={<AboutInstructor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <DeveloperCredit />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
