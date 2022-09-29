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
import Cross from "../assets/Cross.png";
import Sign from "../assets/Sign.png";

const HelperDropdown = ({ removeTodo, ind }) => {
  //Dropdown Option
  const [dropdown, setDropdown] = useState(0);

  //Media Quearry
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 400px)" });

  return (
    <>
      <Grid
        container
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Grid
          item
          alignItems={isSmall ? "flex-start" : "center"}
          style={{
            display: "flex",
            padding: "15px 0px",
            // borderBottom: "1px solid #fff",
            flexDirection: `${isMobile ? "column" : "row"}`,
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
              padding: `${isSmall ? "0px 50px" : "0px 60px"}`,
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
              padding: `${isSmall ? "18px 10px" : "18px 25px"}`,
              borderRadius: "53px",
              marginLeft: `${isMobile ? "0px" : "15px"}`,
              border: "none",
              background: "#52514f",
              fontSize: "16px",
              fontWeight: "500",
              textAlign: "Center",
              color: "fff",
              marginTop: `${isMobile ? "10px" : "0px"}`,
            }}
            className="input"
          />
        </Grid>
        <Grid item style={{ marginTop: `${isMobile ? "15px" : "0px"}` }}>
          <img
            src={Sign}
            style={{ height: "40px", marginRight: "10px", cursor: "pointer" }}
          />
          <img
            src={Cross}
            style={{ height: "40px", cursor: "pointer" }}
            onClick={() => removeTodo(ind)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HelperDropdown;
