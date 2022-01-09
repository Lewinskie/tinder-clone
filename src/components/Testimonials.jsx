import React from "react";
import "./testimonials.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import QuoteIcon from "@material-ui/icons/FormatQuote";

function Testimonials() {
  return (
    <div className="testimonials">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card>
            <CardContent>
              <Typography style={{ fontWeight: "600" }}>
                Lewis & Maina
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "100%" }}>
                  <hr />
                </div>
                <div>
                  <QuoteIcon />
                </div>
              </div>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                doloremque commodi corporis a ab? Adipisci, nulla autem est
                inventore laborum sit illum reiciendis libero assumenda,
                distinctio temporibus ullam cupiditate rerum.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card>
            <CardContent>
              <Typography style={{ fontWeight: "600" }}>
                Lewis & Maina
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "100%" }}>
                  <hr />
                </div>
                <div>
                  <QuoteIcon />
                </div>
              </div>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                doloremque commodi corporis a ab? Adipisci, nulla autem est
                inventore laborum sit illum reiciendis libero assumenda,
                distinctio temporibus ullam cupiditate rerum.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Card>
            <CardContent>
              <Typography style={{ fontWeight: "600" }}>
                Lewis & Maina
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "100%" }}>
                  <hr />
                </div>
                <div>
                  <QuoteIcon />
                </div>
              </div>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                doloremque commodi corporis a ab? Adipisci, nulla autem est
                inventore laborum sit illum reiciendis libero assumenda,
                distinctio temporibus ullam cupiditate rerum.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Testimonials;
