"use client";
import Image from "next/image";
import { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { user } from "@/utils/User";
import { BsChevronDown } from "react-icons/bs";

export default function SettingPage() {

  const [currHeading, setCurrHeading] = useState<string>("edit profile");

    return (
      <main className="w-full">
        <div className="bg-white mt-1.5 p-5 rounded-lg h-fit">
          {/* headings section */}
          <section className="border-b border-[#EBEEF2] text-[13px] flex flex-row justify-between md:max-w-[300px]">
            <div onClick={()=>setCurrHeading("edit profile")} className="py-2 relative cursor-pointer">
              <p className={`capitalize px-2 ${currHeading === "edit profile" ? "text-[#1814F3] font-medium" : "text-[#718EBF]"}`}>edit profile</p>
              <span className={`w-full h-0.5 absolute bottom-0 bg-[#1814F3] rounded-t-lg transition ease-in-out delay-100 ${currHeading === "edit profile" ? "opacity-100" : "opacity-0"}`}></span>
            </div>
            <div onClick={()=>setCurrHeading("preference")} className="py-2 relative cursor-pointer">
              <p className={`capitalize px-2 ${currHeading === "preference" ? "text-[#1814F3] font-medium" : "text-[#718EBF]"}`}>preference</p>
              <span className={`w-full h-0.5 absolute bottom-0 bg-[#1814F3] rounded-t-lg transition ease-in-out delay-100 ${currHeading === "preference" ? "opacity-100" : "opacity-0"}`}></span>
            </div>
            <div onClick={()=>setCurrHeading("security")} className="py-2 relative cursor-pointer">
              <p className={`capitalize px-2 ${currHeading === "security" ? "text-[#1814F3] font-medium" : "text-[#718EBF]"}`}>security</p>
              <span className={`w-full h-0.5 absolute bottom-0 bg-[#1814F3] rounded-t-lg transition ease-in-out delay-100 ${currHeading === "security" ? "opacity-100" : "opacity-0"}`}></span>
            </div>
          </section>

          {/* details section*/}
          {/* profile edits */}
          {currHeading === "edit profile" && (<div className="mt-5 p-1 flex flex-col gap-y-3">
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-8 lg:items-start xl:gap-10">
              <div className="w-[170px] h-[170px] relative place-self-center lg:place-self-start lg:min-w-[170px] lg:min-h-[170px]">
                <Image src={user.avatar} alt="image" priority className="w-full h-full rounded-full" />
                <span className="w-[38px] h-[38px] rounded-full bg-[#1814F3] flex items-center justify-center absolute bottom-3 right-0 text-lg cursor-not-allowed"><VscEdit color="white" /></span>
              </div>
              <div className="flex flex-col gap-y-3 w-full">
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>your name</label>
                  <input className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 capitalize text-[#718EBF] focus:outline-none" defaultValue={user.name} name="name" placeholder="Your Name" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>email</label>
                  <input className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none" defaultValue={user.email} name="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px] relative">
                  <label>date of birth</label>
                  <input className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none capitalize" defaultValue={user.dob} name="dob" placeholder="Your date of birth" />
                  <BsChevronDown className="absolute right-3 bottom-3 cursor-not-allowed" color="#718EBF" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>permanent address</label>
                  <input className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none capitalize" defaultValue={user.address} name="pernamentAddress" placeholder="Your Address" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>postal code</label>
                  <input className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none capitalize" defaultValue={user.postalCode} name="postalCode" placeholder="Your Postal Code" />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 mt-1 w-full">
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>user name</label>
                  <input className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 capitalize text-[#718EBF] focus:outline-none" defaultValue={user.userName} name="userName" placeholder="Your User Name" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>password</label>
                  <input type="password" className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none" defaultValue={user.password} name="password" placeholder="Your Password" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>present address</label>
                  <input className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none capitalize" defaultValue={user.address} name="presentAddress" placeholder="Your Present Address" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>city</label>
                  <input type="text" className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none capitalize" defaultValue={user.city} name="city" placeholder="Your City" />
                </div>
                <div className="flex flex-col gap-y-1 capitalize text-[13px]">
                  <label>country</label>
                  <input type="text" className="h-[40px] border border-[#DFEAF2] rounded-xl px-5 text-[#718EBF] focus:outline-none capitalize" defaultValue={user.country} name="country" placeholder="Your Country" />
                </div>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <button className="bg-[#1814F3] h-[40px] rounded-lg text-white w-full opacity-80 hover:opacity-100 transition delay-100 ease-in-out md:max-w-[140px]">Save</button>
            </div>
          </div>)}

          {/* preference */}
          {currHeading === "preference" && (<div className="h-5 mt-5 p-1">
            preference
          </div>)}

          {/* security */}
          {currHeading === "security" && (<div className="h-5 mt-5 p-1">
            security
          </div>)}
        </div>
      </main>
    );
  }
  