import Image from "next/image";

export default function Home() {
  return (
    <div className="container text-white bg-my_accept border-4 border-red-300">
      <div className="mx-auto ">
      Ferid

      </div>

      <div className="p m-10 bg-slate-500 w-36 text-[30px] h-10">murad</div>

      <div className={`bg-black text-6xl space-y-5 flex-col text-amber-600 p-4 inline-flex w-100 cursor-pointer hover:text-red-700`}>
        <div className="">aaa</div>
        <div className="">bbb</div>
        <div className="">ccc</div>
      </div>
    </div>
  );
}
