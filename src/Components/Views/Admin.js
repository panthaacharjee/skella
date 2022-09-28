import { Button, Grid, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";

const Admin = () => {
  const [stake, setStake] = useState(700);

  //Dropdown Option
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  //Media Quearry
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div>
      <Grid
        item
        style={{ width: "80%", display: "block", margin: "20px auto" }}
      >
        <Typography color={"#fff"}>Cureently Staked: {stake}/2010</Typography>
        <Slider
          aria-label="default"
          min={1}
          max={2010}
          value={stake}
          style={{ height: "10px", color: "blue" }}
          onChange={(e, val) => setStake(val)}
        />
      </Grid>
      <Grid
        item
        style={{
          width: "80%",
          display: "block",
          margin: "20px auto",
          background:
            "linear-gradient(90deg, rgba(70, 165, 255, 0.26) 0%, rgba(74, 176, 255, 0.1976) 0%, rgba(198, 40, 247, 0.2132) 104.87%)",
          borderRadius: "15px",
          padding: "10px 20px",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "25px 20px",
            alignItems: "center",
            borderBottom: ".5px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Grid item md={5} xs={12}>
            <Typography variant="h6" color={"#fff"}>
              Next Gamified Staking In
            </Typography>
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            style={{
              display: `${isMobile ? "block" : "flex"}`,
              alignItems: "center",
              justifyContent: `${isTabletOrMobile ? "flex-start" : "flex-end"}`,
              marginTop: `${isTabletOrMobile ? "15px" : "0px"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                style={{
                  marginRight: "10px",
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "53px",
                  border: "0px solid red",
                  height: "30px",
                  padding: "0px 0px",
                  color: "#fff",
                }}
              />
              <Typography color={"#fff"}> Hours</Typography>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: `${isMobile ? "15px" : "0px"}`,
              }}
            >
              <Button
                style={{
                  marginLeft: `${isMobile ? "0px" : "10px"}`,
                  background: "#0096FF",
                  borderRadius: "53px",
                  border: "0px solid red",
                  height: "30px",
                  padding: "0px 30px",
                  color: "#fff",
                }}
              >
                Start
              </Button>
              <Button
                style={{
                  marginLeft: "10px",
                  background: "#48C379",
                  borderRadius: "53px",
                  border: "0px solid red",
                  height: "30px",
                  padding: "0px 30px",
                  color: "#fff",
                }}
              >
                Stop
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "25px 20px",
            alignItems: "center",
            // borderRadius: "10px",
          }}
        >
          <Grid item md={5} xs={12}>
            <Typography variant="h6" color={"#fff"}>
              Rewards for staking:
            </Typography>
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            style={{
              display: `${isMobile ? "block" : "flex"}`,
              alignItems: "center",
              justifyContent: `${isTabletOrMobile ? "flex-start" : "flex-end"}`,
            }}
          >
            <Button
              style={{
                marginLeft: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "0px 60px",
                color: "#fff",
                marginTop: `${isMobile ? "10px" : "0px"}`,
              }}
            >
              1 Day
            </Button>
            <Button
              style={{
                marginLeft: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "0px 60px",
                color: "#fff",
                marginTop: `${isMobile ? "10px" : "0px"}`,
              }}
            >
              5 Day
            </Button>
            <Button
              style={{
                marginLeft: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "0px 60px",
                color: "#fff",
                marginTop: `${isMobile ? "10px" : "0px"}`,
              }}
            >
              13 Day
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          width: "80%",
          display: "block",
          margin: "20px auto",
          background:
            "linear-gradient(90deg, rgba(70, 165, 255, 0.26) 0%, rgba(74, 176, 255, 0.1976) 0%, rgba(198, 40, 247, 0.2132) 104.87%)",
          borderRadius: "15px",
          padding: "10px 20px",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "25px 20px",
            alignItems: "center",
            borderBottom: ".5px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Grid item md={7} xs={12}>
            <div>
              <Select options={options} pageSize="sm" />
            </div>
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          ></Grid>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "25px 20px",
            alignItems: "center",
            // borderRadius: "10px",
          }}
        >
          <Grid item md={5} xs={12}>
            <Typography variant="h6" color={"#fff"}>
              Rewards for staking:
            </Typography>
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              style={{
                marginLeft: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "0px 60px",
                color: "#fff",
              }}
            >
              1 Day
            </Button>
            <Button
              style={{
                marginLeft: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "0px 60px",
                color: "#fff",
              }}
            >
              5 Day
            </Button>
            <Button
              style={{
                marginLeft: "10px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "0px 60px",
                color: "#fff",
              }}
            >
              13 Day
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
