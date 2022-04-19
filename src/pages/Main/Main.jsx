import React from "react";
import { Link, Box } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Main = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Link p={10} as={ReachLink} to="/admin">
      Admin dashboard
    </Link>
    <Link p={10} as={ReachLink} to="/booking">
      Booking dashboard
    </Link>
  </Box>
);

export default Main;
