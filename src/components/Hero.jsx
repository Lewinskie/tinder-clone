import React from "react";
import "./hero.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="heroContent">
        <div style={{ display: "flex" }}>
          <Typography
            style={{ fontWeight: "700", marginBottom: "20px" }}
            variant="h1"
          >
            Swipe Right
          </Typography>
          <Typography variant="h2"> &reg;</Typography>
        </div>

        <Button
          variant="contained"
          size="large"
          style={{
            background: "red",
            padding: "15px 50px",
            borderRadius: "30px",
          }}
        >
          <Typography style={{ fontWeight: "600", color: "white" }}>
            CREATE ACCOUNT
          </Typography>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
