import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const BookingTimeSelector = ({ isOpen, options = [], onClose, onComplete }) => {
  const [data, setData] = useState({ guestsCount: 2 });

  const setTime = (e) =>
    setData((state) => ({ ...state, timeSlot: e.target.value }));

  const setGuests = (_, guestsCount) =>
    setData((state) => ({ ...state, guestsCount }));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose a convenient time</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select onChange={setTime} placeholder="Select time" size="lg">
            {options.map(({ name, timeSlot }) => (
              <option value={timeSlot}>{name}</option>
            ))}
          </Select>
          <NumberInput
            mt={5}
            onChange={setGuests}
            value={data.guestsCount}
            min={1}
            max={20}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </ModalBody>

        <ModalFooter>
          <Button
            isDisabled={!data.guestsCount || !data.timeSlot}
            onClick={() => onComplete(data)}
            variant="ghost"
          >
            Book
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingTimeSelector;
