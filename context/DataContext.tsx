"use client";
import { createContext, useContext, useState } from "react";

type DataContextType = {
  transactionList: Transaction[];
  filterFunction?: (
    searchValue: string,
    sortOrder?: "asc" | "desc",
    sortProp?: string
  ) => void;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("GlobalContext must be used within GlobalProvider");
  return context;
};

export const DataContext = createContext<DataContextType>({
  transactionList: [],
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const transactionList = [
    {
      id: "23",
      date: "2023-10-01",
      remark: "Salary",
      amount: 3000,
      currency: "USD",
      type: "Credit",
    },
    {
      id: "23",
      date: "2023-10-02",
      remark: "Groceries",
      amount: 150,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-03",
      remark: "Gym Membership",
      amount: 50,
      currency: "USD",
      type: "Credit",
    },
    {
      id: "23",
      date: "2023-10-04",
      remark: "Dinner",
      amount: 40,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-05",
      remark: "Movie Tickets",
      amount: 30,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-06",
      remark: "Rent",
      amount: 1200,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-07",
      remark: "Utilities",
      amount: 100,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-08",
      remark: "Car Payment",
      amount: 400,
      currency: "USD",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-09",
      remark: "Insurance",
      amount: 200,
      currency: "USD",
      type: "Debit",
    },
  ] as DataContextType["transactionList"];
  const [transactionContext, setTransactionContext] = useState(transactionList);

  const handleFilter = (searchValue: string, sortOrder?: "asc" | "desc") => {
    return searchValue?.trim()
      ? transactionList.filter(item =>
          item.remark.toLowerCase().includes(searchValue.toLowerCase())
        )
      : transactionList;
  };

  const handleSort = (
    transactionParam: Transaction[],
    order?: "asc" | "desc",
    sortProp?: keyof Transaction
  ) => {
    if (!sortProp || !order) return transactionParam;

    return [...transactionParam].sort((a, b) => {
      const prop = sortProp.toLowerCase();
      const aValue = a[prop as keyof Transaction];
      const bValue = b[prop as keyof Transaction];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return order === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return order === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (prop == "date") {
        let aDate = new Date(aValue);
        let bDate = new Date(bValue);
        const timeA = aDate?.getTime();
        const timeB = bDate.getTime();
        return order === "asc" ? timeA - timeB : timeB - timeA;
      }

      // If types are not comparable, just return 0 (don't sort nada!)
      return 0;
    });
  };

  // If I wasn't in such a hurry I would have written a pipe/compose function using Array.prototype.reduce, also cached results of each action so that
  // we don't have to re-compute the same filter/sort multiple times, and also make it less coupled. (Just saying, not doing it here for simplicity and speed 🥲)

  const filterFunction = (
    searchValue: string,
    sortOrder?: "asc" | "desc",
    sortProp?: string
  ) => {
    let filteredList = handleFilter(searchValue, sortOrder);
    if (sortProp) {
      console.log("Sorting by: ", sortProp, " in order: ", sortOrder);
      filteredList = handleSort(
        filteredList,
        sortOrder,
        sortProp as keyof Transaction
      );
    }
    setTransactionContext(filteredList);
  };

  return (
    <DataContext.Provider
      value={{ transactionList: transactionContext, filterFunction }}
    >
      {children}
    </DataContext.Provider>
  );
}
