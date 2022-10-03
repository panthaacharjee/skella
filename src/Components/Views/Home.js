import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Img from "../assets/StakedImage.png";
import Ring from "../assets/Ring.png";
import SelectedRing from "../assets/SelectedRing.png";
import Stacke from "./Stacke";
import Unstake from "./Unstake";
import { useMediaQuery } from "react-responsive";

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

  //Media Quearry
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div>
      <div style={{ margin: "30px auto" }}>
        <Paper
          style={{
            width: "79%",
            display: "flex",
            margin: "0px auto",
            borderRadius: "30px",
            height: "120px",
            padding: "0px 30px",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <Grid container display={"flex"} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Typography color={"#fff"}>Skella staked : 5/10</Typography>
              {/* <Typography color={"#fff"}></Typography> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
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
        <Grid
          item
          style={{
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.2)",
            width: "50%",
            margin: "0px auto",
            padding: "10px 0px",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
            borderTopLeftRadius: "0px",
          }}
        >
          <Typography style={{ color: "#fff" }}>
            Gamify you skellas in 1 day: 12 HOUR: 15mins
          </Typography>
        </Grid>
      </div>
      <Grid
        container
        style={{
          width: "85%",
          margin: "0px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Staked Container */}
        <Grid item md={6}>
          <Grid
            container
            style={{
              width: "97%",
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
              justifyContent={"flex-end"}
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
              return <Stacke val={val} ind={ind} />;
            })}
          </Grid>
        </Grid>
        {/* Untaked Container */}

        <Grid item md={6} style={{ marginTop: `${isMobile ? "15px" : "0px"}` }}>
          <Grid
            container
            style={{
              width: "97%",
              margin: "0px auto",
              background:
                "linear-gradient(90deg, rgba(70, 165, 255, 0.1) 0%, rgba(74, 176, 255, 0.076) 0%, rgba(198, 40, 247, 0.082) 104.87%)",
              padding: "20px 0px",
              borderRadius: "20px",
              // marginTop: "20px",
              // display: "block",
            }}
          >
            <Grid
              item
              md={12}
              display={"flex"}
              justifyContent={"flex-end"}
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
                unStake
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
                Unstake All
              </Button>
            </Grid>
            {stakedData.map((val, ind) => {
              return <Unstake val={val} ind={ind} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
