"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import SortIcon from "@/public/Icon.svg";
import { useSearchParams } from "next/navigation";

interface TableWraperProps {
  children: React.ReactNode;
  customClass?: string;
}
export function TableWrapper({ children, customClass }: TableWraperProps) {
  return (
    <div className={`${customClass} flex flex-col w-full`}>{children}</div>
  );
}

interface TableRowProps {
  children: React.ReactNode;
}

export function TableRow({ children }: TableRowProps) {
  return <div className='w-full flex gap-x-4.5'>{children}</div>;
}

interface TableHeadProps {
  headTitle: string;
  onSort: (
    searchValue: string,
    sortOrder?: "asc" | "desc",
    sortProp?: string
  ) => void;
  customClass?: string;
}

export function TableHead({ headTitle, customClass, onSort }: TableHeadProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const queryParams = useSearchParams();

  const handleClick = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    onSort(queryParams.get("searchValue") ?? "", sortOrder, headTitle);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className={`flex items-center border-b-[1.5px] border-[#49656E33] ${customClass}`}
      >
        <span className='font-medium text-[13px] leading-4 text-[#15272D9E]'>
          {headTitle}
        </span>
        <button
          className='flex items-center px-1.5 py-2 cursor-pointer'
          onClick={handleClick}
        >
          <Image
            src={SortIcon}
            width={12}
            height={6}
            alt='sort'
            className={`mt-0.5 `}
          />
        </button>
      </div>
    </Suspense>
  );
}

interface TableDataProps {
  children: React.ReactNode;
  customClass?: string;
}

export function TableData({ customClass, children }: TableDataProps) {
  return (
    <div
      className={`flex items-center border-b-[1.5px] border-[#49656E33] py-4.5 ${customClass}`}
    >
      {children}
    </div>
  );
}
