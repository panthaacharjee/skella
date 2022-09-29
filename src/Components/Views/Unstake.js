import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import Ring from "../assets/Ring.png";
import SelectedRing from "../assets/SelectedRing.png";

const Unstacke = ({ val, ind }) => {
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
        marginTop: "60px",
        cursor: "pointer",
      }}
      key={ind}
      onClick={() => setSelect(!select)}
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(70, 165, 255, 0.25) 0%, rgba(74, 176, 255, 0.19) 0%, rgba(198, 40, 247, 0.205) 104.87%)",
          borderRadius: "10px",
          position: "relative",
          // paddingRight: "10px",
          width: "250px",
          height: "250px",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={!select ? Ring : SelectedRing}
            height={"20px"}
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
              right: "30px",
              top: "-20px",
              zIndex: "5555",
            }}
          />
          <img
            src={val.img}
            height={"250px"}
            style={{
              position: "absolute",
              top: "-20px",
              width: "230px",
            }}
          />
        </div>
        <Typography style={{ color: "#fff", marginLeft: "10px" }}>
          {val.name}
        </Typography>
      </div>
    </Grid>
  );
};

export default Unstacke;
