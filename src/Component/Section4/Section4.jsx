import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import businesslaw from "../../assest/businesslaw.svg";
import partnershiplaw from "../../assest/partnershiplaw.svg";
import realestatelaw from "../../assest/realestatelaw.svg";
import businesslaw2 from "../../assest/businesslaw2.svg";
import landlorddispute from "../../assest/landlorddispute.svg";
import elderabuse from "../../assest/elderabuse.svg";
import "./Section4.css";
import "@fontsource/inter";

const Section4 = () => {
  return (
    <div className="s4-main-container">
      <div className="s4-header">
        <p id="Area of Practices">Area of Practices</p>
      </div>
      <div className="s4-content">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8} style={{ width: "752px" }}>
              <Item>
                <img src={businesslaw} alt="businesslaw logo" />
                <p className="businesslaw">Business Law</p>
              </Item>
            </Grid>
            <Grid item xs={4} style={{ width: "358px" }}>
              <Item>
                <img src={partnershiplaw} alt="partnershiplaw logo" />
                <p className="partnershiplaw">Partnership LAW</p>
              </Item>
            </Grid>
            <Grid item xs={4} style={{ width: "358px" }}>
              <Item>
                <img src={realestatelaw} alt="realestatelaw logo" />
                <p className="realestatelaw">REAL ESTATE LAW</p>
              </Item>
            </Grid>
            <Grid item xs={8} style={{ width: "752px" }}>
              <Item>
                <img src={businesslaw2} alt="businesslaw2 logo" />
                <p className="businesslaw2">Business Law</p>
              </Item>
            </Grid>
            <Grid item xs={8} style={{ width: "752px" }}>
              <Item>
                <img src={landlorddispute} alt="landlorddispute logo" />
                <p className="landlorddispute">LANDLORD DISPUTES</p>
              </Item>
            </Grid>
            <Grid item xs={4} style={{ width: "358px" }}>
              <Item>
                <img src={elderabuse} alt="elderabuse logo" />
                <p className="elderabuse">ELDER ABUSE</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Section4;
