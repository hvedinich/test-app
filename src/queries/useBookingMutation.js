import { useMutation } from "react-query";

export default function useBookingMutation(options) {
  return useMutation(
    (data) =>
      fetch("http://localhost:3300/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    options
  );
}
