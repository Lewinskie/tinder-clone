import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoginNav from "../components/LoginNav";
import Testimonials from "../components/Testimonials";
import "./landingPage.css";

function LandingPage() {
  return (
    <div className="login">
      <LoginNav />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
