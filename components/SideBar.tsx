"use client";

import { useAppLayout } from "@/context/AppLayoutContext";
import useNavigation from "@/hooks/useNavigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function SideBar({ items }: { items: string[] }) {
  const {} = useAppLayout();
  const pathName = useNavigation();

  return (
    <aside className='py-7 pl-12 w-[320px]'>
      <div className='flex flex-col gap-4'>
        {items.map((item, index) => (
          <SideBarItem
            key={index}
            isActive={pathName.toLowerCase() === item.toLowerCase()}
          >
            {item}
          </SideBarItem>
        ))}
      </div>
    </aside>
  );
}

export function SideBarItem({
  isActive = false,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div
      className={[
        "rounded-2xl",
        isActive ? "bg-[#38677629]" : "hover:bg-[#38677610]",
      ].join(" ")}
      onClick={() => {
        router.push(`/${children?.toString().toLowerCase()}`);
      }}
    >
      <p className='py-2 px-4.5 text-[#3A6C7B] text-[15px] leading-5 font-medium cursor-pointer'>
        {children}
      </p>
    </div>
  );
}
