import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Img from "../assets/StakedImage.png";

const Home = () => {
  const stakedData = [
    {
      img: Img,
      name: "Good Skelas",
    },
    {
      img: Img,
      name: "Good Skelas",
    },
    {
      img: Img,
      name: "Good Skelas",
    },
    {
      img: Img,
      name: "Good Skelas",
    },
    {
      img: Img,
      name: "Good Skelas",
    },
    {
      img: Img,
      name: "Good Skelas",
    },
    {
      img: Img,
      name: "Good Skelas",
    },
    {
      img: Img,
      name: "Good Skelas",
    },
  ];
  return (
    <div>
      <Paper
        style={{
          width: "80%",
          display: "flex",
          margin: "30px auto",
          borderRadius: "30px",
          height: "135px",
          padding: "10px 30px",
          background: "#3f178f",
        }}
      >
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid item xs={12} md={6}>
            <Typography color={"#fff"}>Skella staked:</Typography>
            <Typography color={"#fff"}>5/10</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={"#fff"}>140 $BONES</Typography>
              <Button
                style={{
                  borderRadius: "53px",
                  background:
                    "linear-gradient(89.72deg, #F1E71A 0.22%, #D515FE 99.75%)",
                  color: "#fff",
                  marginLeft: "20px",
                  padding: "15px 30px",
                }}
              >
                <Typography color={"#fff"} style={{ fontSize: "12px" }}>
                  Claim Now
                </Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>

      {/* Staked Container */}
      <Grid
        container
        style={{
          width: "80%",
          margin: "0px auto",
          background:
            "linear-gradient(90deg, rgba(70, 165, 255, 0.1) 0%, rgba(74, 176, 255, 0.076) 0%, rgba(198, 40, 247, 0.082) 104.87%)",
          padding: "20px 0px",
          borderRadius: "20px",
        }}
      >
        <Grid
          item
          md={12}
          display={"flex"}
          justifyContent={"end"}
          style={{ margin: "15px 0px", padding: "0px 30px" }}
        >
          <Button
            style={{
              background: "rgba(255, 255, 255, 0.21)",
              color: "#fff",
              borderRadius: "30px",
              padding: "5px 15px",
            }}
          >
            Stake
          </Button>
          <Button
            style={{
              background:
                "linear-gradient(90deg, #46A5FF 0%, rgba(74, 176, 255, 0.76) 0%, rgba(198, 40, 247, 0.82) 104.87%)",
              color: "#fff",
              borderRadius: "30px",
              padding: "5px 15px",
              marginLeft: "10px",
            }}
          >
            Stake All
          </Button>
        </Grid>
        {stakedData.map((val, ind) => {
          return (
            <Grid
              item
              md={3}
              sm={6}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
              key={ind}
            >
              <div style={{ background: "#5c2fb5", borderRadius: "10px" }}>
                <img src={val.img} height={"250px"} />
                <Typography style={{ color: "#fff", marginLeft: "10px" }}>
                  {val.name}
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
      {/* Untaked Container */}
      <Grid
        container
        style={{
          width: "80%",
          margin: "0px auto",
          background:
            "linear-gradient(90deg, rgba(70, 165, 255, 0.1) 0%, rgba(74, 176, 255, 0.076) 0%, rgba(198, 40, 247, 0.082) 104.87%)",
          padding: "20px 0px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <Grid
          item
          md={12}
          display={"flex"}
          justifyContent={"end"}
          style={{ margin: "15px 0px", padding: "0px 30px" }}
        >
          <Button
            style={{
              background: "rgba(255, 255, 255, 0.21)",
              color: "#fff",
              borderRadius: "30px",
              padding: "5px 15px",
            }}
          >
            Stake
          </Button>
          <Button
            style={{
              background:
                "linear-gradient(90deg, #46A5FF 0%, rgba(74, 176, 255, 0.76) 0%, rgba(198, 40, 247, 0.82) 104.87%)",
              color: "#fff",
              borderRadius: "30px",
              padding: "5px 15px",
              marginLeft: "10px",
            }}
          >
            Stake All
          </Button>
        </Grid>
        {stakedData.map((val, ind) => {
          return (
            <Grid
              item
              md={3}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
              key={ind}
            >
              <div style={{ background: "#5c2fb5", borderRadius: "10px" }}>
                <img src={val.img} height={"250px"} />
                <Typography style={{ color: "#fff", marginLeft: "10px" }}>
                  {val.name}
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
