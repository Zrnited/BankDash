"use client";
import Header from "@/components/layout/dashboard/Header";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import Sidenav from "@/components/layout/dashboard/Sidenav";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <main className="flex relative flex-row w-full h-screen">
      <Sidebar />
      <Sidenav sidebar={sidebar} setSidebar={setSidebar} />
      <section className="flex flex-col w-full">
        <Header setSidebar={setSidebar} />
        <div className="bg-[#F5F7FA] flex flex-grow w-full pt-32 pr-3 pl-3 md:overflow-scroll md:h-screen sm:pt-[86px] md:pl-[226px]">{children}</div>
      </section>
    </main>
  );
}
