"use client";
import logo from "@/assets/images/bankdashlogo.png";
import { LinkRoutes } from "@/utils/LinkRoutes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={"hidden bg-white w-[220px] border-r border-r-[#E6EFF5] absolute left-0 top-0 h-full py-7 pr-3 md:flex flex-col z-20"}>
      <div className="flex justify-center items-center w-full mt-1">
        <Image src={logo} alt="logo" priority className="w-[60%] h-auto" />
      </div>
      <ul className="w-full flex flex-col mt-4 gap-y-3">
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
                  className={
                    a.linkRoute === pathname
                      ? "text-[#2D60FF] text-sm capitalize"
                      : "text-[#B1B1B1] text-sm capitalize"
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
