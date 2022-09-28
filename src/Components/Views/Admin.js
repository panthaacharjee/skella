import {
  Button,
  Grid,
  Slider,
  Typography,
  FormControl,
  InputLabel,
  NativeSelect,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useMediaQuery } from "react-responsive";
import { AiOutlinePlus } from "react-icons/ai";

const Admin = () => {
  const [stake, setStake] = useState(700);

  //Dropdown Option
  const [dropdown, setDropdown] = useState(0);

  //Media Quearry
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

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
              display: "flex",
              flexDirection: `${isMobile ? "column" : "row"}`,
              // alignItems: "center",
              justifyContent: `${isTabletOrMobile ? "flex-start" : "flex-end"}`,
              marginTop: `${isTabletOrMobile ? "20px" : "0px"}`,
            }}
          >
            <Button
              style={{
                marginLeft: `${isMobile ? "0px" : "10px"}`,
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "30px 60px",
                color: "#fff",
                marginTop: `${isMobile ? "20px" : "0px"}`,
              }}
            >
              1 Day
            </Button>
            <Button
              style={{
                marginLeft: `${isMobile ? "0px" : "10px"}`,
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "30px 60px",
                color: "#fff",
                marginTop: `${isMobile ? "10px" : "0px"}`,
              }}
            >
              5 Day
            </Button>
            <Button
              style={{
                marginLeft: `${isMobile ? "0px" : "10px"}`,
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "53px",
                border: "0px solid red",
                height: "30px",
                padding: "30px 60px",
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
            borderBottom: "1px solid #fff",
          }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid
            item
            alignItems={"center"}
            style={{
              display: "flex",
              padding: "15px 0px",
              // borderBottom: "1px solid #fff",
            }}
          >
            <Select
              // id="demo-simple-select"
              value={dropdown}
              label="none"
              onChange={(e) => setDropdown(e.target.value)}
              // defaultChecked={"Dropdown"}
              style={{
                color: "#fff",
                borderRadius: "53px",
                padding: "0px 60px",
                background: "#52514f",
              }}
            >
              <MenuItem value={0}>Dropdown</MenuItem>
              <MenuItem value={1}>Ten</MenuItem>
              <MenuItem value={2}>Twenty</MenuItem>
              <MenuItem value={3}>Thirty</MenuItem>
            </Select>
            <input
              placeholder="Address"
              style={{
                padding: "18px 5px",
                borderRadius: "53px",
                marginLeft: "15px",
                border: "none",
                background: "#52514f",
                fontSize: "16px",
                fontWeight: "500",
                textAlign: "Center",
              }}
              className="input"
            />
          </Grid>
          <Grid>
            <AiOutlinePlus />
            <AiOutlinePlus />
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            borderBottom: "1px solid #fff",
          }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid
            item
            alignItems={"center"}
            style={{
              display: "flex",
              padding: "15px 0px",
              // borderBottom: "1px solid #fff",
            }}
          >
            <Select
              // id="demo-simple-select"
              value={dropdown}
              label="none"
              onChange={(e) => setDropdown(e.target.value)}
              // defaultChecked={"Dropdown"}
              style={{
                color: "#fff",
                borderRadius: "53px",
                padding: "0px 60px",
                background: "#52514f",
              }}
            >
              <MenuItem value={0}>Dropdown</MenuItem>
              <MenuItem value={1}>Ten</MenuItem>
              <MenuItem value={2}>Twenty</MenuItem>
              <MenuItem value={3}>Thirty</MenuItem>
            </Select>
            <input
              placeholder="Address"
              style={{
                padding: "18px 5px",
                borderRadius: "53px",
                marginLeft: "15px",
                border: "none",
                background: "#52514f",
                fontSize: "16px",
                fontWeight: "500",
                textAlign: "Center",
              }}
              className="input"
            />
          </Grid>
          <Grid>
            <AiOutlinePlus />
            <AiOutlinePlus />
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "20px 0px",
          }}
        >
          <Button
            style={{
              color: "#fff",
              background: "#46465f",
              borderRadius: "46px",
              padding: "8px 20px",
            }}
          >
            Save
          </Button>
          <Button
            style={{
              color: "#fff",
              background: "blue",
              borderRadius: "46px",
              padding: "8px 20px",
              marginLeft: "10px",
            }}
          >
            <AiOutlinePlus />
            Add More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
