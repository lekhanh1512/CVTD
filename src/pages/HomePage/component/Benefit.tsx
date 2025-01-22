import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Benefit = () => {
  return (
    <div>
      <div className="relative bg-white my-10 py-4 px-4 flex items-center justify-center">
        <span className="text-[#47ae31] font-bold text-3xl md:text-4xl lg:text-4xl tracking-wide leading-tight text-center">
          CƠ SỞ VẬT CHẤT & TIỆN ÍCH DỊCH VỤ
        </span>
      </div>

      <div className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative md:w-1/2">
              <img
                alt="Student holding books in front of a university building"
                className="w-full h-64 md:h-full object-cover"
                src="https://placehold.co/600x400"
              />
            </div>

            {/* Tabs Section */}
            <div className="w-full md:w-1/2 p-6 relative h-auto md:h-auto">
              <div className="w-full">
                <Tabs defaultValue="base" className="w-full text-lg md:text-xl">
                  {/* Tabs List */}
                  <TabsList className="flex flex-wrap md:flex-nowrap space-x-4 border-b border-gray-300">
                    <TabsTrigger
                      value="base"
                      className="text-base md:text-xl font-semibold text-gray-700 hover:text-green-500 transition duration-300"
                    >
                      Cơ sở vật chất
                    </TabsTrigger>
                    <TabsTrigger
                      value="benefit"
                      className="text-base md:text-xl font-semibold text-gray-700 hover:text-green-500 transition duration-300"
                    >
                      Tiện ích dịch vụ
                    </TabsTrigger>
                  </TabsList>

                  {/* Base Content */}
                  <TabsContent value="base" className="space-y-4 mt-4">
                    <h2 className="text-sm md:text-lg">
                      <span className="font-bold">
                        Câu Lạc Bộ Cờ Vua TP. Thủ Đức
                      </span>{" "}
                      được trang bị cơ sở vật chất hiện đại và tiện nghi, tạo
                      điều kiện học tập thoải mái và hiệu quả cho các bé.
                    </h2>
                    <h2 className="text-sm md:text-lg">
                      <span className="font-bold">
                        Phòng học được lắp đặt máy lạnh,
                      </span>{" "}
                      giúp duy trì không gian thoáng mát và dễ chịu suốt cả buổi
                      học.
                    </h2>
                    <h2 className="text-sm md:text-lg">
                      <span className="font-bold">
                        Mỗi phòng đều được trang bị đầy đủ các bộ cờ vua chất
                        lượng cao và các dụng cụ học tập cần thiết,
                      </span>{" "}
                      tạo nên một không gian nơi mà các bé rèn luyện và phát
                      triển kỹ năng tư duy một cách tối ưu.
                    </h2>
                    <h2 className="text-sm md:text-lg">
                      Sau giờ học,{" "}
                      <span className="font-bold">
                        các bé còn được thư giãn với những món đồ chơi giải trí,
                      </span>{" "}
                      mở ra không gian vui tươi, cân bằng giữa việc học và vui
                      chơi.
                    </h2>
                  </TabsContent>

                  {/* Benefit Content */}
                  <TabsContent value="benefit" className="space-y-4 mt-4">
                    <h2 className="text-sm md:text-lg">
                      <span className="font-bold">
                        Câu Lạc Bộ Cờ Vua TP. Thủ Đức
                      </span>{" "}
                      không chỉ mang đến môi trường học tập hiện đại mà còn nổi
                      bật với những tiện ích dịch vụ đặc biệt, giúp các bé phát
                      triển niềm đam mê cờ vua một cách toàn diện.
                    </h2>
                    <h2 className="text-sm md:text-lg">
                      <span className="font-bold">
                        Với quy trình kiểm tra đầu vào bài bản và đội ngũ tổ
                        chức chuyên nghiệp,
                      </span>{" "}
                      câu lạc bộ thường xuyên tổ chức Giải Cờ Vua Thủ Đức Mở
                      Rộng hàng quý. Đây là sân chơi đầy bổ ích, nơi các em nhỏ
                      có cơ hội rèn luyện kỹ năng, nâng cao chiến thuật, có cơ
                      hội đối đầu cùng các đối thủ đồng trang lứa. Vừa là nơi
                      tranh tài, giải đấu còn mở ra cánh cửa giao lưu, giúp các
                      bé học hỏi từ những vận động viên chuyên nghiệp, phát
                      triển tư duy, nuôi dưỡng tinh thần thể thao, sáng tạo.
                    </h2>
                    <h2 className="text-sm md:text-lg">
                      Mỗi trận đấu là một hành trình khám phá, nơi mà các bé
                      không ngừng trưởng thành qua từng nước cờ đầy khôn ngoan
                      và sáng tạo.
                    </h2>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
