import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import axios from "../axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/tinder/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      res ? window.location.replace("/login") : console.log("error occured");
    } catch (error) {}
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card style={{ style: 'minWidth:"200px', maxWidth: "400px" }}>
        <CardContent style={{ justifyContent: "center", textAlign: "center" }}>
          <div style={{ marginTop: "40px" }}>
            <img src="/logo/tinder-icon.svg" alt="" height="50px" />
          </div>
          <Typography
            style={{
              marginTop: "20px",
              fontWeight: "600",
              fontStyle: "italic",
            }}
            variant="h5"
          >
            GET STARTED
          </Typography>
          <Typography style={{ marginTop: "20px" }} variant="body2">
            By clicking Log In, you agree to our Terms. Learn how we process
            your data in our Privacy Policy and Cookie Policy
          </Typography>
        </CardContent>
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ width: "100%" }}>
              <TextField
                type="text"
                placeholder="Enter username..."
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                label="Username"
                fullWidth
              />
            </div>
            <div style={{ width: "100%" }}>
              <TextField
                type="text"
                placeholder="Email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email"
                fullWidth
              />
            </div>

            <div style={{ width: "100%" }}>
              <TextField
                type="text"
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                fullWidth
              />
            </div>

            <CardActions>
              <div style={{ width: "100%", marginTop: "40px" }}>
                <Button fullWidth type="submit" variant="outlined">
                  register
                </Button>
              </div>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
