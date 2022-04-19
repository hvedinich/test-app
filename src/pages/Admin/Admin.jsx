import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
const Admin = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 10,
    }}
  >
    <Text fontSize="3xl"> Coming soon</Text>
    <Link p={10} as={ReachLink} to="/">
      Go back
    </Link>
  </Box>
);

export default Admin;
