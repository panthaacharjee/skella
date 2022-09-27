import React from "react";
import { Typography, Grid, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{
          padding: "0px 40px",
          background: "#290b66",
          height: "50px",
          boxShadow: "0px 2px 4px rgba(0, 150, 255, 0.2)",
        }}
      >
        <Typography color={"#fff"}>Logo Here</Typography>

        <Button
          style={{
            borderRadius: "53px",
            background:
              "linear-gradient(90deg, #46A5FF 0%, rgba(74, 176, 255, 0.76) 0%, rgba(198, 40, 247, 0.82) 104.87%)",
            color: "#fff",
          }}
        >
          Connect Wallet
        </Button>
      </Grid>
    </div>
  );
};

export default Navbar;
