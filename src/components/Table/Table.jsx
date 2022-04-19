import React from "react";
import { Button, Text } from "@chakra-ui/react";

const Table = ({ onClick, tableData }) => (
  <Button
    colorScheme="teal"
    onClick={() => onClick(tableData.id)}
    isDisabled={!tableData?.availableSlots?.length}
    sx={{
      p: 20,
      width: 100,
      height: 100,
      borderRadius: 200,
    }}
  >
    <Text fontSize="3xl"> Table {tableData?.tableNumber}</Text>
  </Button>
);

export default Table;
