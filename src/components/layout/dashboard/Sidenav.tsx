"use client";
import logo from "@/assets/images/bankdashlogo.png";
import { LinkRoutes } from "@/utils/LinkRoutes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
    setSidebar: Dispatch<SetStateAction<boolean>>;
    sidebar: boolean;
}

export default function Sidenav({ setSidebar, sidebar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={sidebar ? "bg-white w-full border-r border-r-[#E6EFF5] fixed left-0 h-full py-7 pr-3 flex flex-col z-20 transition-all ease-in-out delay-100 md:hidden" : "bg-white w-full border-r border-r-[#E6EFF5] fixed -left-full h-full py-7 pr-3 flex flex-col z-20 transition-all ease-in-out delay-100 md:hidden"}>
      <div onClick={()=>setSidebar(false)} className="place-self-end cursor-pointer font-bold">
        <AiOutlineClose color="#FE5C73" size={23} />
      </div>
      <div className="flex justify-center items-center w-full mt-1">
        <Image src={logo} alt="logo" priority className="w-[80%] h-auto" />
      </div>
      <ul className="w-full flex flex-col mt-4 gap-y-2">
        {LinkRoutes.map((a, b) => {
          return (
            <li key={b} className="h-[55px] flex items-center gap-x-6 w-full">
              <span
                className={
                  a.linkRoute === pathname
                    ? "w-[6px] rounded-r-3xl h-full bg-[#2D60FF] opacity-100"
                    : "w-[6px] rounded-r-3xl h-full bg-[#2D60FF] opacity-0"
                }
              ></span>
              <div className="flex flex-row w-full flex-grow items-center gap-x-4">
                {pathname === a.linkRoute ? a.icon : a.iconNotActive}
                <Link
                  href={a.linkRoute}
                  onClick={()=>setSidebar(false)}
                  className={
                    a.linkRoute === pathname
                      ? "text-[#2D60FF] text-[17px] capitalize"
                      : "text-[#B1B1B1] text-[17px] capitalize"
                  }
                >
                  {a.linkName}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
