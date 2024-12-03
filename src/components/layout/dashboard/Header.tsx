import user from "@/assets/images/user-avatar.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch, CiSettings } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setSidebar }: HeaderProps) {
  return (
    <header className="p-5 absolute top-0 left-0 right-0 bg-white flex flex-col gap-y-2 border-b border-b-[#E6EFF5]">
      <nav className="flex flex-row justify-between items-center">
        <button onClick={()=>setSidebar(true)} className="md:hidden text-xl">
          <GiHamburgerMenu color="#343C6A" />
        </button>
        <h1 className="text-[#343C6A] font-semibold text-lg">Overview</h1>
        <div className="hidden flex-row gap-x-4 items-center sm:flex md:gap-x-7">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for something"
              className="w-full h-[40px] rounded-full bg-[#F5F7FA] pl-12 pr-5 text-sm focus:outline-none"
              name="search"
            />
            <i className="absolute left-5 top-2.5">
              <CiSearch size={20} color="#718EBF" />
            </i>
          </div>
          <Link
            href={"/"}
            className="bg-[#F5F7FA] w-[40px] h-[40px] rounded-full flex justify-center items-center"
          >
            <CiSettings size={23} color="#718EBF" />
          </Link>
          <span className="bg-[#F5F7FA] w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <AiOutlineBell color="#FE5C73" size={23} />
          </span>
          <Image
            src={user}
            priority
            className="w-[40px] h-[40px] rounded-full"
            alt="logo"
          />
        </div>
        <Image
          src={user}
          priority
          className="w-[35px] h-[35px] rounded-full sm:hidden"
          alt="logo"
        />
      </nav>
      <div className="relative sm:hidden">
        <input
          type="text"
          placeholder="Search for something"
          className="w-full h-[40px] rounded-full bg-[#F5F7FA] pl-12 pr-5 text-sm focus:outline-none"
          name="search"
        />
        <i className="absolute left-5 top-2.5">
          <CiSearch size={20} color="#718EBF" />
        </i>
      </div>
    </header>
  );
}
