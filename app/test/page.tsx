'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Test() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
   if (darkMode) {
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')
  }
  }, [darkMode])

  return(
    <div className="container dark:bg-black text-white bg-my_accept border-4 border-red-300">
    <div className="mx-auto ">
      Ferid
    </div>

    <div className="p m-10 bg-slate-500 w-36 text-[30px] h-10">murad</div>

    <div className={` dark:bg-white bg-black text-6xl space-y-5 flex-col text-amber-600 p-4 inline-flex w-100 cursor-pointer hover:text-red-700`}>
      <div className="">aaa</div>
      <div className="">bbb</div>
      <div className="">ccc</div>
    </div>
    <div className="esas ">
      <div className=" relative m-5 rounded-full bg-cyan-700 shadow-lg shadow-cyan-500/30 inline-flex px-3 py-1 cursor-pointer  duration-1000 hover:bg-cyan-500">
      <div className="yazi">
        sebet
      </div>
      <div className="absolute -top-2 right-3 qiymet bg-yellow-500 rounded-full text-xs px-1">2</div>
      </div>
      <button onClick={()=>setDarkMode(!darkMode)} className="rounded-full bg-cyan-700 shadow-lg shadow-cyan-500/30 inline-flex px-3 py-1 cursor-pointer  duration-1000 hover:bg-cyan-500">
        dark mode
      </button>
    </div>
  </div>
  )

  }