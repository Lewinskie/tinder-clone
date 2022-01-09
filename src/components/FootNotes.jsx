import React from "react";
import "./footNotes.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Youtube from "@material-ui/icons/YouTube";
import Reddit from "@material-ui/icons/Reddit";
import Instagram from "@material-ui/icons/Instagram";

function FootNotes() {
  return (
    <div style={{ padding: "20px 50px" }}>
      <Grid container spacing={3} className="footNotes">
        <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
          <Typography style={{ fontWeight: "600", marginBottom: "20px" }}>
            LEGAL
          </Typography>
          <Typography>Privacy</Typography>
          <Typography>Terms</Typography>
          <Typography>Cookie Policy</Typography>
          <Typography>Intelectual Property</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
          <Typography style={{ fontWeight: "600", marginBottom: "20px" }}>
            CAREERS
          </Typography>
          <Typography>Careers Portal</Typography>
          <Typography>TechBlog</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
          <Typography style={{ fontWeight: "600", marginBottom: "20px" }}>
            SOCIAL
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Instagram style={{ marginRight: "10px", fontSize: "2rem" }} />
            <Reddit style={{ marginRight: "10px", fontSize: "2rem" }} />
            <Youtube style={{ marginRight: "10px", fontSize: "2rem" }} />
            <Twitter style={{ marginRight: "10px", fontSize: "2rem" }} />
            <Facebook style={{ marginRight: "10px", fontSize: "2rem" }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Typography style={{ marginBottom: "20px" }}>FAQ</Typography>
          <Typography>Destinations</Typography>
          <Typography>Press Room</Typography>
          <Typography>Contact</Typography>
          <Typography>Promo Code</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div>
            <hr />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FootNotes;
