import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import Ring from "../assets/Ring.png";
import SelectedRing from "../assets/SelectedRing.png";

const Stacke = ({ val, ind }) => {
  const [select, setSelect] = useState(false);
  return (
    <Grid
      item
      lg={3}
      md={4}
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        cursor: "pointer",
      }}
      key={ind}
      onClick={() => setSelect(!select)}
    >
      <div
        style={{
          background: "#5c2fb5",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <img
          src={!select ? Ring : SelectedRing}
          height={"20px"}
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            right: "20px",
          }}
        />
        <img src={val.img} height={"250px"} />
        <Typography style={{ color: "#fff", marginLeft: "10px" }}>
          {val.name}
        </Typography>
      </div>
    </Grid>
  );
};

export default Stacke;
