import Image from "next/image";
import KebabIcon from "@/public/dots-horizontal.svg";

interface CardProps {
  title: string;
  amount: string;
  percentage: string;
}

export default function Card({ title, amount, percentage }: CardProps) {
  return (
    <div className='bg-[#34616F17] p-7 rounded-[20px] w-[223px]'>
      <div className='flex items-center justify-end mb-4.5'>
        <p className='font-bold text-[17px] mr-auto text-[#1B2528] leading-6'>
          {title}
        </p>
        <Image src={KebabIcon} alt='kebab' width={18} height={4} />
      </div>
      <p className='text-[34px] font-bold mb-1 text-[#1B2528] leading-10'>
        {amount}
      </p>
      <p className='text-[13px] leading-4 font-medium text-[#3E7383]'>
        {percentage}
      </p>
    </div>
  );
}
