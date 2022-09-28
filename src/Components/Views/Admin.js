import { Button, Grid, Slider, Typography } from "@mui/material";
import React, { useState } from "react";

const Admin = () => {
  const [stake, setStake] = useState(700);
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
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
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
                }}
              />
              <Typography color={"#fff"}> Hours</Typography>
            </div>
            <Button
              style={{
                marginLeft: "10px",
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
