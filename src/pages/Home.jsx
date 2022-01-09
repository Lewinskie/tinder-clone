import React from "react";
import Header from "../components/Header";
import SwipeButtons from "../components/SwipeButtons";
import TinderCards from "../components/TinderCards";
import axios from "../axios";
import { useState, useEffect } from "react";

function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/tinder/card");
      setPeople(req.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* LIST OF HOMEPAGE COMPONENTS */}
      {/* Header */}
      {/* TinderCards  */}
      {/* SwipeButtons */}

      <Header />

      {people.length > 0 && <TinderCards people={people} />}

      <SwipeButtons />
    </div>
  );
}

export default Home;
