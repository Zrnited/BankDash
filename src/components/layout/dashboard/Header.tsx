import user from "@/assets/images/user-avatar.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch, CiSettings } from "react-icons/ci";
import { AiOutlineBell, AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import deleteCookie from "@/app/authenticateUser/handleCookies";

export interface HeaderProps {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setSidebar }: HeaderProps) {
  const pathname = usePathname();
  const [logOutBar, setLogOutBar] = useState<boolean>(false);
  // console.log(pathname);

  function setHeaderText() {
    if (pathname === "/dashboard/setting") {
      return "Setting";
    }
    if (pathname === "/dashboard") {
      return "Overview";
    }
    if (pathname === "/dashboard/transactions") {
      return "Transactions";
    }
    if (pathname === "/dashboard/accounts") {
      return "Accounts";
    }
  }

  function logOut (){
    deleteCookie();
    window.location.href="/";
  }

  return (
    <header className="p-5 fixed top-0 left-0 right-0 bg-white flex flex-col z-10 gap-y-2 border-b border-b-[#E6EFF5] justify-center items-center">
      <nav className="flex flex-row justify-between items-center container">
        <button onClick={() => setSidebar(true)} className="md:hidden text-xl">
          <GiHamburgerMenu color="#343C6A" />
        </button>
        <h1 className="text-[#343C6A] font-semibold text-lg lg:text-[#343C6A]  md:ml-[240px] lg:text-2xl">
          {setHeaderText()}
        </h1>
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
            onClick={()=>setLogOutBar(!logOutBar)}
            priority
            className="w-[40px] h-[40px] rounded-full cursor-pointer"
            alt="logo"
          />
        </div>
        <Image
          src={user}
          onClick={()=>setLogOutBar(!logOutBar)}
          priority
          className="w-[35px] h-[35px] rounded-full cursor-pointer sm:hidden"
          alt="logo"
        />
        <button disabled={!logOutBar} className={`absolute right-2 bottom-6 rounded-lg py-2 px-3 text-sm bg-white shadow-lg z-10 flex gap-x-1 justify-center items-center capitalize hover:text-[#FE5C73] transition ease-in-out delay-100 sm:-bottom-7 lg:right-5 ${logOutBar ? "opacity-100 cursor-pointer" : "opacity-0 cursor-default"}`}>
        <AiOutlineLogout />
          <p onClick={logOut}>logout</p>
        </button>
      </nav>
      <div className="relative w-full sm:hidden">
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
