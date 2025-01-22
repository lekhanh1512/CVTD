// Đây là Component Hightlight phần điểm nổi bật của trang web

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import React from "react";

const Highlight = () => {
   const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="mx-auto max-w-6xl mb-20" id="gdlr-core-wrapper-2">
    <div className="flex flex-wrap items-center bg-slate-100 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 bg-slate-400">
        <div className=" h-full relative">
          <img
            alt="Promotional image for Cờ Vua Sài GÒN with text '3 Lí do chọn Cờ Vua Sài Gòn' and various icons and images"
            className="w-full h-full object-fit"
            src="/logo.jpg"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="container p-4">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2 p-4"
          >
            <h1 className="font-bold text-3xl text-black">Điểm Nổi Bật</h1>
            <h2 className="font-bold text-2xl text-[#47ae31]">
              Câu Lạc Bộ Cờ Vua TP. Thủ Đức
            </h2>
            <p className="mb-4 text-black">
              <span className="font-bold">
                1. Tham gia các hoạt động sự kiện:
              </span>
              Học viên có cơ hội tham gia vào các giải đấu, sự kiện cờ vua
              do câu lạc bộ tổ chức, giúp các em trải nghiệm thực tế, cọ xát
              và nâng cao kỹ năng trong môi trường thi đấu chuyên nghiệp.
            </p>
            <p className="text-black">
              <span className="font-bold">2. Theo đuổi niềm đam mê:</span>
              Câu lạc bộ tạo ra môi trường học tập đầy hứng khởi, nơi các em
              nhỏ có thể thỏa sức theo đuổi niềm đam mê cờ vua, từ đó rèn
              luyện kỹ năng tư duy, phát triển chiến thuật cùng sự sáng tạo.
            </p>
            <CollapsibleContent className="space-y-2">
              <p className="text-black">
                <span className="font-bold">
                  3. Đào tạo kiến thức chuyên môn:
                </span>
                Học viên được đào tạo từ cơ bản đến nâng cao với chương
                trình bài bản, chuyên sâu về cờ vua. Phương pháp giảng dạy
                hiện đại giúp trẻ phát triển tối đa tư duy logic, kỹ năng
                phân tích và chiến thuật thông qua từng ván cờ.
              </p>
              <p className="text-black">
                <span className="font-bold">
                  4. Hỗ trợ thi đấu chuyên nghiệp:
                </span>
                Câu lạc bộ hỗ trợ, tư vấn cho học viên khi tham gia các giải
                đấu từ cấp tỉnh đến quốc gia, thậm chí quốc tế. Đây là cơ
                hội quý báu để các em khẳng định bản thân, phát huy tài
                năng, tích lũy kinh nghiệm thi đấu trên những sân chơi lớn.
              </p>
            </CollapsibleContent>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="font-bold bg-blue-600 text-white py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-110 hover:text-white"
              >
                TÌM HIỂU THÊM
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Highlight