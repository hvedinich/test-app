import { useQuery } from "react-query";

export default function useTablesQuery() {
  return useQuery("repoData", () =>
    fetch("http://localhost:3300/api/tables?date=1650229200000").then((res) =>
      res.json()
    )
  );
}
