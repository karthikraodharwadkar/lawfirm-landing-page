import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import "./Section7.css";
import "@fontsource/inter";


export default function BasicAccordion() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          // expandIcon={
          //   <AddIcon
          //     style={{
          //       backgroundColor: "#E3B748",
          //       borderRadius: "13px",
          //       color: "black",
          //     }}
          //   />
          // }
          
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: "#1D1D1D",
          }}
        >
          <Typography
            style={{ fontSize: "24px", color: "#FFFFFF", fontWeight: "600",fontFamily:"inter" }}
          >
            Do I need a personal injury report?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ padding: "0px", backgroundColor: "#1D1D1D",fontFamily:"inter"}}
        >
          <Typography
            style={{
              color: "#FFFFFF",
              opacity: "0.3",
              fontSize: "18px",
            }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={
            <AddIcon
              style={{
                backgroundColor: "#E3B748",
                borderRadius: "13px",
                color: "black",
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            backgroundColor: "#1D1D1D",
          }}
        >
          <Typography
            style={{ fontSize: "24px", color: "#FFFFFF", fontWeight: "600",fontFamily:"inter" }}
          >
            How much is my case worth?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <AddIcon
              style={{
                backgroundColor: "#E3B748",
                borderRadius: "13px",
                color: "black",
              }}
            />
          }
          aria-controls="panel3a-content"
          id="panel3a-header"
          style={{
            backgroundColor: "#1D1D1D",
          }}
        >
          <Typography
            style={{ fontSize: "24px", color: "#FFFFFF", fontWeight: "600",fontFamily:"inter" }}
          >
            What should I do right after car accidect
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <AddIcon
              style={{
                backgroundColor: "#E3B748",
                borderRadius: "13px",
                color: "black",
              }}
            />
          }
          aria-controls="panel3a-content"
          id="panel3a-header"
          style={{
            backgroundColor: "#1D1D1D",
          }}
        >
          <Typography
            style={{ fontSize: "24px", color: "#FFFFFF", fontWeight: "600",fontFamily:"inter" }}
          >
            How much is my case worth?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
