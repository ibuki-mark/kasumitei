import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckIcon from "@mui/icons-material/Check";

type Props = {
  open: boolean;
};

export const Footersection = (props: Props) => {
  const { open } = props;
  return (
    <div className={`Footersection  bg-gray-500  py-1 ${open ? "hidden" : ""}`}>
      <div className="flex items-center flex-col text-white py-25 border m-2">
        <div
          className={`flex justify-around  w-full max-[970px]:flex-col max-[970px]:ml-23`}
        >
          <div className="max-[970px]:text-xl max-[590px]:text-sm">
            <div className="mb-2">〒000-0000</div>
            <div className="max-[970px]:mt-10">架空県 架空都 架空町架空0000-1</div>
          </div>

          <div className="flex items-center  gap-60 max-[1100px]:gap-25 max-[970px]:mt-15 max-[590px]:gap-10 max-[590px]:mt-10 ">
            <div className="flex items-center gap-10">
              <div
                className="border  px-5 py-1  hover:bg-stone-950  hover:tracking-[3px]  bg-stone-100  tracking-[2px] 
                  text-black hover:text-white transition-all duration-300 text-sm flex items-center cursor-pointer max-[590px]:px-2"
              >
                宿泊予約
                <PendingActionsIcon />
              </div>
              <div
                className="border  px-5 py-1  hover:bg-stone-950  hover:tracking-[3px]   bg-stone-100  tracking-[2px]
                   text-black hover:text-white transition-all duration-300 text-sm flex items-center cursor-pointer max-[590px]:px-2"
              >
                食事予約
                <PendingActionsIcon />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 max-[590px]:text-sm">
                Language
                <CheckIcon />
              </div>
              <div className="w-26 h-[1px] bg-white mt-1"></div>
            </div>
          </div>
        </div>

        <div className="flex  justify-around w-full mt-15 max-[940px]:flex-col max-[590px]:mt-10">
          <div className="flex flex-col items-center mr-10 max-[1200px]:mr-0">
            <div className="text-2xl max-[1200px]:text-xl">
              Tel. 0000-00-0000
            </div>
            <div className="mt-2">( 09:00-18:00 )</div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="flex items-center gap-10 text-[15px] max-[1100px]:gap-7 max-[670px]:gap-4 max-[670px]:mt-10 max-[590px]:w-100 max-[590px]:gap-3">
              <div className="">お知らせ</div>
              <div>霞亭について</div>
              <div>レストラン</div>
              <div>宿泊</div>
              <div>アクセス</div>
              <div>よくある質問</div>
              <div>お問い合わせ</div>
            </div>

            <div className="w-full bg-white h-[1px] mt-9 max-[940px]:w-145 max-[670px]:w-125 max-[590px]:w-100"></div>

            <div className="mt-10 flex items-center justify-around w-full max-[940px]:w-145 max-[670px]:w-128 max-[590px]:w-100">
              <div className="flex items-center gap-8 w-full text-[15px] max-[670px]:gap-4 max-[590px]:gap-2">
                <div>採用情報</div>
                <div>会社概要</div>
                <div>プライバシーポリシー</div>
                <div>宿泊予約</div>
              </div>

              <div className="text-[12px] opacity-50">
                <small>&copy;</small>
                Kasumitei
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
