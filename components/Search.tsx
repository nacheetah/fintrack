"use client";
import { useData } from "@/context/DataContext";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import { debounce } from "@/utils/debounce";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();
  const { filterFunction } = useData();

  useEffectOnce(() => {
    const searchValue = queryParams.get("searchValue");
    if (searchValue) {
      filterFunction?.(searchValue);
    }
  });

  const handleOnKeyUp = (value: string) => {
    filterFunction?.(value);
    router.push(`${pathname}?searchValue=${value}`);
  };

  return (
    <div className='flex-1 h-10 md:inline-flex items-center justify-between relative'>
      <input
        type='text'
        placeholder='Type here to search...'
        className='w-full h-full rounded-md bg-[#e5e5e5] px-2 placeholder:text-sm text-base text-[#7d8184] border border-transparent outline-none focus-visible:border-[#f5f5f5] border[3px]'
        defaultValue={queryParams.get("searchValue") ?? ""}
        onKeyUp={debounce(event => {
          handleOnKeyUp((event.target as HTMLInputElement).value);
        }, 500)}
      />
      <span className='w-12 h-full hover text-lightash text-2xl flex items-center justify-center rounded-tr-md rounded-br-md absolute right-0'>
        <Image
          aria-hidden
          src='/search.svg'
          alt='widget'
          width={24}
          height={24}
        />
      </span>
    </div>
  );
};

export default Search;
