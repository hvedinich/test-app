import React, { useState } from "react";
import useTablesQuery from "../../queries/useTablesQuery";
import useBookingMutation from "../../queries/useBookingMutation";
import { Box, Heading, useToast } from "@chakra-ui/react";
import Table from "../../components/Table";
import BookingTimeSelector from "../../components/BookingTimeSelector";

const defaultBookingData = { guestsCount: 2 };

const Booking = () => {
  const [selectedTable, setSelectedTable] = useState();
  const toast = useToast();
  const [bookingData, setBookingData] = useState(defaultBookingData);

  const { data, refetch } = useTablesQuery();
  const { mutate } = useBookingMutation({
    onSuccess: () => {
      toast({
        title: "Booking created.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      refetch();
    },
  });

  const selectTable = (id) => {
    setSelectedTable(data.find((e) => e.id === id));
  };
  const onClose = () => {
    setBookingData(defaultBookingData);
    setSelectedTable();
  };

  const chooseTime = ({ timeSlot, guestsCount }) => {
    mutate({
      tableId: selectedTable.id,
      timeSlot,
      guestsCount,
      // date should be used to select the day of the booking
      date: 1650229200000,
    });
    setSelectedTable();
    setBookingData(defaultBookingData);
  };

  const setTime = (e) =>
    setBookingData((state) => ({ ...state, timeSlot: e.target.value }));

  const setGuests = (_, guestsCount) =>
    setBookingData((state) => ({ ...state, guestsCount }));

  return (
    <Box p={10}>
      <Heading as="h2" size="3xl" w="100%" textAlign="center">
        Booking
      </Heading>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 10,
        }}
      >
        {data?.map((e) => (
          <Table onClick={selectTable} tableData={e} />
        ))}
      </Box>
      <BookingTimeSelector
        isOpen={!!selectedTable}
        options={selectedTable?.availableSlots}
        onClose={onClose}
        onComplete={chooseTime}
        setTime={setTime}
        setGuests={setGuests}
        data={bookingData}
      />
    </Box>
  );
};
export default Booking;
