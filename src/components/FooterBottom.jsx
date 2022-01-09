import React from "react";
import "./footerBottom.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

function FooterBottom() {
  return (
    <div className="footerBottom">
      <Grid container spacing={3}>
        <Grid item className="bottomLogos">
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            GET THE APP!
          </Typography>
          <IconButton>
            <img
              src="/logo/googleplay.png"
              alt=""
              style={{ objectFit: "cover", width: "150px", height: "50px" }}
            />
          </IconButton>
          <IconButton>
            <img
              src="/logo/appstore.png"
              alt=""
              style={{
                objectFit: "cover",
                width: "140px",
                height: "40px",
                borderRadius: "6px",
              }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ marginBottom: "20px" }}>
            Single people, listen up: If you’re looking for love, want to start
            dating, or just keep it casual, you need to be on Tinder. With over
            55 billion matches made, it’s the place to be to meet your next best
            match. Let’s be real, the dating landscape looks very different
            today, as most people are meeting online. With Tinder, the world’s
            most popular free dating app, you have millions of other single
            people at your fingertips and they’re all ready to meet someone like
            you. Whether you’re straight or in the LGBTQIA community, Tinder’s
            here to bring you all the sparks.
          </Typography>
          <Typography variant="body2">
            There really is something for everyone on Tinder. Want to get into a
            relationship? You got it. Trying to find some new friends? Say no
            more. New kid on campus and looking to make the most of your college
            experience? Tinder U’s got you covered. Tinder isn’t your average
            dating site — it’s the most diverse dating app, where adults of all
            backgrounds and experiences are invited to make connections,
            memories, and everything in between.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <hr />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid
              item
              style={{ display: "flex", justifyContent: "center" }}
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
            >
              <Typography variant="body2" style={{ marginRight: "20px" }}>
                FAQ
              </Typography>
              <div style={{ marginRight: "20px" }}>/</div>
              <Typography variant="body2" style={{ marginRight: "20px" }}>
                Safety Tips
              </Typography>
              <div style={{ marginRight: "20px" }}>/</div>
              <Typography variant="body2" style={{ marginRight: "20px" }}>
                Terms
              </Typography>
              <div style={{ marginRight: "20px" }}>/</div>
              <Typography variant="body2" style={{ marginRight: "20px" }}>
                Cookie Policy
              </Typography>
              <div style={{ marginRight: "20px" }}>/</div>
              <Typography variant="body2" style={{ marginRight: "20px" }}>
                Privacy Settings
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <Typography variant="body2">&copy;</Typography>
              </div>
              <Typography variant="body2">
                2021 Match Group, LLC, All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterBottom;
