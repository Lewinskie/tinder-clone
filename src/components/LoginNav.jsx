import React from "react";
import "./loginNav.css";
import Typography from "@material-ui/core/Typography";
import Globe from "@material-ui/icons/Public";
import Button from "@material-ui/core/Button";

function LoginNav() {
  return (
    <div className="loginNav">
      <div className="loginNavLeft">
        <div className="navLogo">
          <img src="/logo/tinder-icon.svg" alt="" height="50px" />
          <Typography variant="h4" style={{ fontWeight: "700" }}>
            tinder
          </Typography>
        </div>

        <div className="topLinkItem">
          <Typography variant="h6">Products</Typography>
        </div>
        <div className="topLinkItem">
          <Typography variant="h6">Learn</Typography>
        </div>
        <div className="topLinkItem">
          <Typography variant="h6">Safety</Typography>
        </div>
        <div className="topLinkItem">
          <Typography variant="h6">Support</Typography>
        </div>
        <div className="topLinkItem">
          <Typography variant="h6">Download</Typography>
        </div>
      </div>

      <div className="loginNavRight">
        <div className="navLang">
          <Globe />
          <Typography variant="h6">English</Typography>
        </div>
        <div className="navBtn">
          <Button variant="contained">
            <Typography variant="h6" style={{ color: "red" }}>
              Login
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginNav;
