import HotelIcon from "@mui/icons-material/Hotel";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

type Props={
  open:boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = (props:Props) => {
  
  const{open,setOpen}=props;
  const[active,setActive]=useState<boolean>(false);
  const duration:number=250;

  const handleClick=()=>{
   if(!open){
   setOpen(true);
   requestAnimationFrame(() => { 
      setActive(true);
    });
   }
   else{
    setActive(false);
    setTimeout(()=>{
    setOpen(false);
    },duration)
   }
  }

  return (
    <>
      <div className={`header  sticky top-0  text-zinc-100 z-20 bg-gray-600`}>
        <div className="headerMenu container mx-auto py-8 flex justify-between px-5 max-sm:px-8">
          <div className="hederLeft flex  items-center max-[1030px]:flex-col">
            <div className="MainLogo flex items-center ">
              <div className="Logo ">
                <HotelIcon />
              </div>

              <div
                className="HotelName flex flex-col 
             items-center ml-2"
              >
                <div className="text-4xl font-mono">霞亭</div>

                <div className="text-sm">KASUMITEI</div>
              </div>
            </div>

            <div className={`hotelhistory  flex flex-row lg:flex-col transition-all duration-400 items-center md:ml-15 max-[1030px]:hidden mr-10 ${open ? "hidden":""}`}>
              <div className="hotelhistory_English  font-medium">
                200年を超える伝統文化に委ねる
              </div>

              <div className="hotelstory_Japannese font-bold   max-md:ml-0 font-serif">
                Embrace 200 years of tradition
              </div>
            </div>
          </div>

          <div className="flex items-center ">
            <div className="flex   items-center max-md:flex-col ">
              <div
                className=" border  px-5 py-1  hover:bg-stone-50  hover:tracking-[3px] 
            hover:text-black transition-all duration-300 text-sm flex items-center cursor-pointer"
              >
                宿泊予約
                <PendingActionsIcon />
              </div>
              <div
                className=" border px-5 py-1 hover:bg-stone-50 cursor-pointer hover:tracking-[3px]
             hover:text-black transition-all duration-300 text-sm flex items-center  ml-0  md:ml-10  max-[768px]:mt-2"
              >
                食事予約
                <PendingActionsIcon />
              </div>
            </div>

            <div className="ml-14 cursor-pointer hover:opacity-50 duration-300 overflow-hidden " onClick={handleClick}>
              <div className={`bg-zinc-100 w-13 h-1 mb-3 transition-all duration-400 ${open ? "-rotate-135 translate-y-4":""}` } ></div>
              <div className={`bg-zinc-100 w-13 h-1 mb-3 transform transition-all duration-400 ${open ? "translate-x-100":""}`}></div>
              <div className={`bg-zinc-100 w-13 h-1 transition-all duration-400 ${open ? "rotate-135 -translate-y-4":""}`}></div>
            </div>
          </div>
        </div>
      </div>




<div className={` ${open ? "":"hidden"} transition-all duration-600 bg-gray-600 text-white transform ${active ? "opacity-100 translate-y-0 scale-100":"opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}>

<div
        className={`flex items-center h-[83vh] container mx-auto w-full justify-center z-20  max-[1030px]:px-20 max-[830px]:px-30 max-[600px]:px-25
         `}
      >
        <div className="flex items-center max-[830px]:w-88">
          <nav className="list-none flex flex-col  gap-10 text-xl max-[1030px]:text-md max-[1030px]:gap-7 max-[830px]:text-sm max-[830px]:gap-6">
            <li className="cursor-pointer hover:opacity-50 duration-300">お知らせ</li>
            <li className="cursor-pointer hover:opacity-50 duration-300">霞亭について</li>
            <li className="cursor-pointer hover:opacity-50 duration-300">レストラン</li>
            <li className="cursor-pointer hover:opacity-50 duration-300">宿泊</li>
            <li className="cursor-pointer hover:opacity-50 duration-300">アクセス</li>
            <li className="cursor-pointer hover:opacity-50 duration-300">よくあるご質問</li>
          </nav>
        </div>

        <div className="w-120 h-[1px] rotate-90 bg-white"></div>

        <div className="flex flex-col gap-12 text-xl max-[1030px]:text-md max-[1030px]:gap-7 max-[830px]:text-sm max-[830px]:gap-4">
          <div className="flex gap-10 max-[1030px]:flex-col max-[830px]:gap-5">
            <div className="flex gap-2 cursor-pointer hover:opacity-50 duration-300 ">
              <div className="">Language</div>
              <CheckIcon/>
            </div>
            <div>
              <div className="cursor-pointer hover:bg-white transition-all  hover:text-gray-800 duration-300 border border-white px-4 max-[1030px]:w-38 text-center">お問い合わせ</div>
            </div>
          </div>
          <div>
            <div className="mb-5 text-xl">霞亭</div>
            <div>〒000-0000</div>
            <div>架空県 架空都 架空町架空0000-1</div>
          </div>
          <div>
            <div className="text-md mb-5">Tel. 0000-00-0000</div>
            <div className="ml-3">( 09:00-18:00 )</div>
          </div>
        </div>
      </div>

</div>
      
    </>
  );
};
