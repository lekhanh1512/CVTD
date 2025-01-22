import { ArrowRight } from 'lucide-react'

const about = () => {
  return (
    <div className="relative">
    <img
      alt="Background image of university students in a hallway"
      className="w-full h-full object-cover absolute inset-0 z-0"
      src="/anh1.png"
    />
    <div className="relative z-10 bg-[#378d24] bg-opacity-85 p-8 md:p-16 lg:p-24 text-white">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-center mb-4 space-x-2">
            <div className="w-[100px] h-[100px] rounded-s-lg ">
              <img
                alt="University logo"
                className="mr-4 object-fit rounded-full"
                src="/logo.jpg"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              CLB Cờ Vua TP. Thủ Đức
            </h1>
          </div>
          <div className="flex justify-center mb-6 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-green-500">
              Về Chúng Tôi
            </h2>
          </div>
        </div>
        <div className="font-medium text-lg md:text-xl lg:text-2xl mb-6">
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Câu Lạc Bộ Cờ Vua TP. Thủ Đức tự hào là nơi ươm mầm cho các tài
            năng trẻ, với triết lý giáo dục tiến bộ, khuyến khích sự sáng
            tạo, phát triển tư duy của các em. Thầy cô không chỉ là người
            dạy, mà còn là người dẫn đường, đồng hành cùng học sinh trong
            quá trình trải nghiệm và nỗ lực. Tại đây, các bé được tự do khám
            phá, phát huy khả năng của mình, trong khi vẫn nhận được sự hỗ
            trợ tối đa từ đội ngũ giáo viên chuyên nghiệp.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Về thành tích, câu lạc bộ đã gặt hái nhiều giải thưởng danh giá
            ở các giải đấu từ cấp thành phố đến cấp quốc gia, như Hội Khỏe
            Phù Đổng và giải học đường. Đặc biệt,...
          </p>
          <div className="flex hover:text-green-500 transition duration-300 ease-in-out transform hover:text-green-500 hover:scale-105">
            <a
              className="text-lg md:text-xl lg:text-2xl font-semibold text-white "
              href="#"
            >
              Xem Thêm
            </a>
            <ArrowRight className="ml-2 mt-1 transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default about