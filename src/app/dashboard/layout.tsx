"use client";
import Header from "@/components/layout/dashboard/Header";
import Sidebar from "@/components/layout/dashboard/Sidebar";
import Sidenav from "@/components/layout/dashboard/Sidenav";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {

  const [sidebar, setSidebar] = useState<boolean>(false);

  useEffect(()=>{
    if(sidebar){
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebar])
  return (
    <main className="flex relative flex-row w-full h-screen">
      <Sidebar />
      <Sidenav sidebar={sidebar} setSidebar={setSidebar} />
      <section className="flex flex-col w-full">
        <Header setSidebar={setSidebar} />
        <div className="flex flex-grow w-full pt-32 md:overflow-scroll activity md:h-screen sm:pt-[86px] md:pl-[220px] lg:pl-[240px] lg:pr-5 xl:overflow-auto">{children}</div>
      </section>
    </main>
  );
}
