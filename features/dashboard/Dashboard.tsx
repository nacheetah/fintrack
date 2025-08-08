"use client";

import Image from "next/image";
import { useState } from "react";
import Kebab from "@/public/dots-horizontal.svg";
import OverviewTab from "./OverviewTab";
// import AvatarGroup from "@/components/ui/AvatarGroup";
import TransactionsTab from "./TransactionsTab";
import StatusBadge from "@/components/ui/Badge";
import Tab from "@/components/Tab";

export function DashboardComponent() {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentTabIndex, setIndex] = useState(0);

  const users = [
    { name: "Ava", imageUrl: "https://i.pravatar.cc/100?img=1" },
    { name: "Liam", imageUrl: "https://i.pravatar.cc/100?img=2" },
    { name: "Noah", imageUrl: "https://i.pravatar.cc/100?img=3" },
    { name: "Olivia", imageUrl: "https://i.pravatar.cc/100?img=4" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
    { name: "Olivia", imageUrl: "https://i.pravatar.cc/100?img=4" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
    { name: "Olivia", imageUrl: "https://i.pravatar.cc/100?img=4" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
  ];
  return (
    <div>
      <div className='flex'>
        <div className='flex items-center'>
          <h3 className='font-bold text-[34px] text-[#1B2528] mr-4'>
            Wallet Ledger
          </h3>
          <StatusBadge className='mr-auto' type='gain' status='Active' />
        </div>
        <div className='flex items-center ml-auto'>
          <button className='bg-[#4B8B9F] text-[15px] font-medium leading-5 mr-3 py-2 px-4.5 rounded-2xl cursor-pointer'>
            Share
          </button>
          <button className='flex justify-center items-center w-9 h-9 rounded-full border-[1.5px] border-[#49656E33] cursor-pointer'>
            <Image width={24} height={24} src={Kebab} alt='kebab' />
          </button>
        </div>
      </div>
      <div className='flex items-center my-7'>
        {/* <AvatarGroup users={users} /> */}
      </div>
      {/* <div>
        <Image src={ProfileImages} alt='profiles' />
        <p className='text-[#15272D9E] text-[15px] leading-5 ml-3'>
          Ava, Liam, Noah +12 others
        </p>
      </div> */}

      <Tab
        currentTab={currentTabIndex}
        onChange={(newIndex: number) => {
          setIndex(newIndex);
        }}
      >
        <Tab.HeadsContainer>
          <div className='flex'>
            <Tab.Item label='Overview' index={0} />

            <Tab.Item label='Transactions' index={1} />
          </div>
        </Tab.HeadsContainer>

        <Tab.ContentContainer>
          <Tab.ContentItem index={0}>
            {currentTabIndex === 0 && <OverviewTab />}
            {currentTabIndex === 1 && <TransactionsTab />}
          </Tab.ContentItem>

          <Tab.ContentItem index={1}>
            <h1>Transactions tab</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}
