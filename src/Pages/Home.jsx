import React from "react";

import Stats from "../Componants/Stats";

import AmazonTopics from "../Componants/AmazonTopics";
import HowItWorks from "../Componants/HowItWorks";

import FAQ from "./FAQ";
import Contact from "./Contact";
import Hero from "../Componants/Hero";
import DiscountPopup from "../Componants/DiscountPopup";
import Testimonials from "../Componants/Testimonials";
import MentorSection from "../Componants/MentorSection";
import TeamSection from "../Componants/TeamSection";

const Home = () => {
  return (
    <div>
      <DiscountPopup />
      <Hero />
      <Stats />
      <MentorSection />

      <HowItWorks />
      <TeamSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
