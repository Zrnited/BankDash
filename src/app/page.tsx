/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { setCookie } from "./authenticateUser/handleCookies";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/bankdashlogo.png";

interface LoginForm {
  username: string;
  password: string;
  agreement: boolean;
}

export default function Home() {

  const router = useRouter();
  const authUser = {
    userName: "user123",
    password: "pass123xJi5"
  }
  
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
    agreement: false,
  });
  const [disableBtn, setDisableBtn] = useState<boolean>(true);
  const [succNotify, setSuccNotify] = useState<string>();
  const [errNotify, setErrNotify] = useState<string>();
  const [isUserAuth, setIsUserAuth] = useState<boolean>(false);
  const [togglePass, setTogglePass] = useState<boolean>(false);

  function handleChange(e: any) {
    const { name, type, value, checked } = e.target;
    setLoginForm((a) => {
      return {
        ...a,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit (e: any){ 
    e.preventDefault();
    if(loginForm.username && loginForm.password && loginForm.agreement){
      if(loginForm.username === authUser.userName && loginForm.password === authUser.password){
        setSuccNotify("Signed in successfully");
        setCookie();
        setIsUserAuth(true);
      } else {
        setErrNotify("Invalid Username or Password");
      }
    }
  }

  useEffect(()=>{
    if(!loginForm.password || !loginForm.username || !loginForm.agreement){
      setDisableBtn(true);
    } else {
      setDisableBtn(false);
    }
  }, [loginForm])

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(errNotify){
        setErrNotify(undefined);
      }
    }, 2000)
    return () => clearInterval(interval);
  }, [errNotify])

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(succNotify){
        setSuccNotify(undefined);
      }
    }, 2000)
    return () => clearInterval(interval);
  }, [succNotify])

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(isUserAuth){
        router.push('/redirectDashboard');
      }
    }, 2500)
    return () => clearInterval(interval);
  }, [isUserAuth])

  return (
    <main className="relative flex w-full h-screen justify-center items-center">
      {succNotify && (<div className="absolute top-8 bg-green-500 h-[50px] w-full md:w-2/3 flex items-center justify-center text-white lg:max-w-[500px]">
        <p>{succNotify}</p>
      </div>)}
      {errNotify && (<div className="absolute top-8 bg-red-600 h-[50px] w-full md:w-2/3 flex items-center justify-center text-white lg:max-w-[500px]">
        <p>{errNotify}</p>
      </div>)}
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 items-center border px-5 py-8 mx-5 w-full border-[#343C6A] sm:max-w-[400px] lg:px-8 lg:max-w-[500px]">
        <Image src={logo} alt="logo" priority className="w-1/2 h-auto" />
        {/* username */}
        <div className="flex flex-col gap-y-2 w-full mt-5">
          <label className="text-[#343C6A] font-semibold">Username:</label>
          <input
            className="h-[45px] w-full border border-[#343C6A] px-3 rounded-md focus:outline-none"
            required
            placeholder="Enter your username"
            type="text"
            onChange={handleChange}
            name="username"
          />
        </div>
        {/* password */}
        <div className="flex flex-col gap-y-2 w-full relative">
          <label className="text-[#343C6A] font-semibold">Password:</label>
          <input
            className="h-[45px] w-full border border-[#343C6A] px-3 rounded-md focus:outline-none"
            required
            placeholder="Enter your password"
            type={togglePass ? "text" : "password"}
            onChange={handleChange}
            name="password"
          />
          <p onClick={()=>setTogglePass(!togglePass)} className="text-[#343C6A] text-sm font-semibold absolute right-3 top-11 cursor-pointer">{togglePass ? "hide" : "show"}</p>
        </div>
        {/* checkbox */}
        <div className="flex flex-row gap-y-2 w-full items-center gap-x-2">
          <input
            className="h-[20px] w-[20px] border border-[#343C6A] rounded-md"
            type="checkbox"
            checked={loginForm.agreement}
            onChange={handleChange}
            name="agreement"
            required
          />
          <label className="text-[#343C6A] text-xs">
            By checking this box, you agree to our Terms and Policies.
          </label>
        </div>
        {/* --sign in btn-- */}
        <button disabled={disableBtn} className="h-[45px] bg-[#343C6A] rounded-md w-full text-white transition ease-in-out delay-100 disabled:bg-gray-400 hover:animate-pulse">
          Sign in
        </button>
      </form>
    </main>
  );
}
