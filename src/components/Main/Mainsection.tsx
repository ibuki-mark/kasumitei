import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SouthIcon from "@mui/icons-material/South";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import NorthIcon from '@mui/icons-material/North';
import { useEffect } from "react";

type Props = {
  open: boolean;
};

export const Mainsection = (props: Props) => {
  const { open } = props;
  
  useEffect(()=>{
    const obeserver:IntersectionObserver=new IntersectionObserver((entries:IntersectionObserverEntry[])=>{
    entries.forEach((entry:IntersectionObserverEntry)=>{
     if(entry.isIntersecting){
      entry.target.classList.add("show");
      obeserver.unobserve(entry.target);
     }
    })
  })

   document.querySelectorAll(".fade-in").forEach(el=> obeserver.observe(el));

  },[])
  
  return (
    <div className={`Mainsection ${open ? "hidden" : ""} `} id="home">
      <div className="topImage w-full h-[70vh] relative">
        <img
          src="./main.jpg"
          className="w-full h-full object-cover object-center "
        />
        <div className="absolute top-[85%] text-slate-100 w-full ">
          <div className=" w-full h-[1px] bg-slate-100 opacity-50"></div>
          <div className="flex justify-center gap-3 mt-5">
            <div className=" flex">
              <AccessTimeIcon />
              <div>2025.00.00</div>
            </div>

            <div>朝は新鮮な空気の中、夜は月明かりのもとで贅沢に</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50  py-5 " >
        <div className="sidever flex  justify-between container mx-auto px-3 text-center py-2  items-center ">
          <div className="sideverLeft flex items-center ">
            <SouthIcon />
            <div className="font-bold font-serif">Scroll</div>
          </div>

          <div className="sideverRight" >
            <div className="flex justify-between font-sm ">
              <nav className="flex list-none border-b pb-2  gap-5 max-[1200]:gap-10 max-[1030px]:hidden font-serif">
                <li className="cursor-pointer hover:opacity-50">お知らせ</li>
                <li className="cursor-pointer hover:opacity-50">
                  霞亭について
                </li>
                <li className="cursor-pointer hover:opacity-50">レストラン</li>
                <li className="cursor-pointer hover:opacity-50">宿泊</li>
                <li className="cursor-pointer hover:opacity-50">アクセス</li>
                <li className="cursor-pointer hover:opacity-50">
                  よくあるご質問
                </li>
                <li className="cursor-pointer hover:opacity-50">
                  お問い合わせ
                </li>
              </nav>

              <div className="font-serif ml-20 cursor-pointer hover:opacity-50 flex items-center gap-4 border-b ">
                Language
                <CheckIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-30 fade-in">
          <div className="flex items-center flex-col">
            <div className="lg:text-5xl md:text-4xl sm:text-xl sm:font-bold font-serif mb-7 max-[700px]:font-bold">
              お知らせ
            </div>
            <p>霞亭からのお知らせ</p>
          </div>

          <div className="mt-20 max-[640px]:px-3 flex items-center">
            <div className="w-280 container mx-auto bg-white flex rounded-md max-[640px]:w-full ">
              <div className="flex px-10 py-10 items-center border border-gray-200 w-1/2 rounded-md max-[760px]:w-full">
                <div className="hover:opacity-50 duration-300 cursor-pointer">
                  <img
                    src="./infomation.jpg"
                    width="250"
                    className="object-cover object-center"
                  />
                </div>

                <div className="ml-8 hover:opacity-50 duration-300 cursor-pointer">
                  <div className="flex items-center mb-3 text-gray-400 ">
                    <AccessTimeIcon />
                    <div>2025.10.21</div>
                  </div>
                  <div>
                    朝の絶景に含まれる。
                    <br />
                    心ほどける至福の体験
                  </div>
                </div>
              </div>

              <div
                className="flex px-10 py-10 items-center border border-gray-200 w-1/2 rounded-md
              max-[760px]:hidden">
                <div className="hover:opacity-50 duration-300 cursor-pointer">
                  <img
                    src="./specialfood.jpg"
                    width="250"
                    className="object-cover object-center"
                  />
                </div>

                <div className="ml-8 hover:opacity-50 duration-300 cursor-pointer">
                  <div className="flex items-center mb-3 text-gray-400 ">
                    <AccessTimeIcon />
                    <div>2025.10.21</div>
                  </div>
                  <div>
                    ミシュランシェフによる。
                    <br />
                    特別メニューのご案内
                  </div>
                </div>
              </div>
            </div>

            <NavigateNextIcon className="!w-20 !h-15 text-gray-500 cursor-pointer hover:opacity-50 duration-300" />
          </div>

          <div
            className="mt-30 container mx-auto text-center w-70 py-5
        hover:bg-stone-950 hover:text-white hover:font-bold cursor-pointer
        hover:tracking-[3px] duration-300 font-serif
         bg-amber-50 border"
          >
            お知らせを見る
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-20 ">
        <div className=" mx-auto text-center  px-3  mt-20 max-md:mt-10 fade-in">
          <div className="text-4xl font-serif font-bold">
            ミシュランが認めた絶景プライベートヴィラ
          </div>
          <div className="mt-30">霞亭で,贅沢な屋景色をお楽しみください。</div>
        </div>

        <div className=" mt-20  max-[1025px]:px-0 max-[1024px]:mx-0 px-30 fade-in">
          <div className="flex max-[1025px]:flex-col-reverse ">
            <div className="w-1/2 bg-slate-200 0 h-120 mt-25 px-22 -mr-10 max-[1025px]:mt-0 max-[1025px]:w-full max-[1025px]:h-80 ">
              <div className="mt-40 mb-10 font-serif font-bold text-2xl max-[1025px]:mt-14 max-[530px]:text-xl  max-[530px]:mb-3 max-[400px]:text-sm">
                自然の中の雰囲気を大切に
              </div>
              <div className="font-serif leading-relaxed max-[530px]:text-sm ">
                霞亭の住まいを大切に、美しさと過ごしやすさをを追及した
                空間。廊下に広がる景色の中、家族や友人との絆を深める特別なひととき。
                広い敷地の中で、街の喧騒を離れ、自然のリズムに身を委ねてくつろげる贅沢な
                時間をお過ごしください。
              </div>
            </div>
            <div className="w-1/2 h-120  max-[1025px]:h-[70vh]  max-[1025px]:w-full  box-border">
              <img
                src="./vue.jpg"
                width="1200"
                className="object-center object-cover h-full  max-[1025px]:w-screen"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-40 container mx-auto text-center w-70 py-5
        hover:bg-stone-950 hover:text-white hover:font-bold cursor-pointer
        hover:tracking-[3px] duration-300 font-serif
         bg-amber-50 border  max-md:mt-20 fade-in"
        >
          コンセプトを見る
        </div>

        <div className="container mx-auto px-3 mt-50 text-center max-md:mt-30 fade-in">
          <div className="font-bold font-serif lg:text-5xl md:tex-4xl sm:text-xl ">
            客室
          </div>

          <div className="font-serif mt-8">ROOMS</div>
        </div>

        <div className=" items-center bg-neutral-400 mt-10 fade-in">
          <div className="flex justify-between py-30 max-[1035px]:flex-col max-[950px]:py-20">
            <div className="flex flex-col items-center text-white ml-55  max-[1035px]:mb-20">
              <div className=" font-serif text-6xl max-[1030px]:mr-180 max-[950px]:mr-100  max-[950px]:text-3xl">
                STAY
              </div>
              <div className="flex items-center font-serif mt-5 max-[1035px]:hidden">
                <ArrowRightAltIcon />
                <div>宿泊</div>
              </div>
            </div>

            <div className="ml-30">
              <img
                src="hotel_room.jpg"
                width="900"
                className="p-3 border border-white"
              />
            </div>
          </div>

          <div className="flex items-center max-[1100px]:px-5">
            <div className="bg-white w-[500px] h-[3px] rotate-120 max-[700px]:hidden"></div>
            <div className="text-white font-serif ml-10">
              <div className="text-3xl font-bold max-[530px]:text-xl max-[530px]:font-bold">
                露天風呂付プライベートヴィラでの宿泊体験
              </div>

              <div className="leading-relaxed text-xl mt-10 max-[530px]:text-sm ">
                歴史ある穂垂亭の敷地内に隣接するラグジュアリーな
                <br />
                プライベートヴィラが2023年3月に新築されました。
                <br />
                100平米を越える空間にはゆったりとくつろげるリビング、
                <br />
                志賀高原の山々を目の前に絶景が広がる開放的なオープンテラスと
                <br />
                源泉かけ流し露店風呂があり、自然と調和する贅沢
                <br />
                なひと時をお過ごしいただけます。
              </div>
              <div>
                <div className="flex  items-center mt-15 font-serif font-bold max-[530px]:mb-1 hover:opacity-50 duration-300 cursor-pointer">
                  <div>View Detail</div>
                  <ArrowRightAltIcon />
                </div>

                <div className="w-30 h-[1px] bg-white mt-2"></div>
              </div>
            </div>
          </div>

          <div className="mt-30 flex container mx-auto justify-center pb-30 max-[1100px]:px-5 max-[530px]:flex-col max-[530px]:mt-0">
            <div className="mr-10 mt-45 max-[530px]:mb-5">
              <img
                src="./japanese_garden.jpg"
                width="500"
                className="p-2 border border-white "
              />
            </div>
            <div className="ml-5">
              <img
                src="./huro.jpg"
                width="600"
                className="p-2 border border-white "
              />
            </div>
          </div>
        </div>

        <div className="mt-55 flex container mx-auto justify-between px-25 max-[1300px]:px-10 max-[1300px]:flex-col-reverse max-[1300px]:mt-10 fade-in">
          <div>
            <img
              src="./restaurant.jpg "
              width="500"
              className="p-2 border border-amber-800 mr-20 object-cover"
            />
          </div>
          <div className="mr-20 mt-20 flex flex-col itmes-center max-[1300px]:ml-20">
            <div className="font-serif  text-6xl">Restaurant</div>
            <div className="my-10">レストラン</div>
            <div className="font-serif leading-[45px] text-md">
              築200年以上の旅館をモダンに
              <br />
              リノベーションした和食レストラン。
              <br />
              素材を生かした空間と味わいをお愉しみいただける
              <br />
              上林温泉郷に 佇む大人の隠れ家。
            </div>

            <div>
              <div className="flex  mt-10 mb-3 hover:opacity-50 duration-300 cursor-pointer">
                <div className="mr-5 text-xl font-serif">View Detail</div>
                <div>
                  <ArrowRightAltIcon />
                </div>
              </div>
              <div>
                <div className="w-35 h-[1px] bg-gray-700"></div>
              </div>
              <div className="mt-40 ml-25  max-[1300px]:mt-20 max-[1300px]:mb-25 max-[1300px]:ml-35 ">
                <img
                  src="./ryokan_food.jpg"
                  width="350"
                  className="object-cover p-2 border border-amber-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-35 h-[60vh] mx-auto max-[800px]:h-[50vh] fade-in">
          <img
            src="./restaurant_vue.jpg"
            className="object-cover object-center h-full w-full py-1  border-y border-amber-700"
          />
        </div>

        <div className="flex mt-40 container mx-auto justify-center px-10 w-full max-[770px]:hidden font-serif mb-20 gap-3 fade-in">
          <div className="flex items-center gap-5">
            <div className="w-50 h-50 border relative rounded-full  ">
              <div
                className="absolute top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] flex gap-2 cursor-pointer hover:opacity-50 transition-all duration-300 items-center"
              >
                <div>宿泊予約</div>
                <PendingActionsIcon />
              </div>
            </div>
            <div className="w-20 h-[1px] bg-black rotate-135 max-[1040px]:w-20 "></div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-50 h-50 border relative rounded-full ">
              <div
                className="absolute top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] flex gap-2 cursor-pointer hover:opacity-50 transition-all duration-300 items-center"
              >
                <div>宿泊予約</div>
                <PendingActionsIcon />
              </div>
            </div>
            <div className="w-20 h-[1px] bg-black rotate-135 max-[1040px]:w-20 "></div>
          </div>

          <div className=" flex-glow-1 ">
            <div className="w-50 h-50 border relative rounded-full ">
              <div
                className="absolute top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] flex gap-2 cursor-pointer hover:opacity-50 transition-all duration-300 items-center"
              >
                <div>宿泊予約</div>
                <PendingActionsIcon />
              </div>
            </div>
          </div>
        </div>

        
           <a href="#home" className="flex w-full justify-center cursor-pointer overflow-y-hidden mt-15">
            <NorthIcon className="hover:opacity-50 duration-300"/>
            <div className="font-serif transition-all hover:opacity-50  duration-300 ">
              scroll to Top
            </div>
          </a>
        

          

      </div>
    </div>
  );
};
