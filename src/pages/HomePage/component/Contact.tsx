

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-fit bg-opacity-70 p-20 relative bg-black">
        <img
          src="/anh1.png" // Use forward slashes for paths
          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30" // Đặt hình ảnh làm nền
          alt="Background"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">
            HỌC THỬ <span className="text-[#47AE31]">MIỄN PHÍ</span>
          </h1>
          <p className="mb-8">
            Vui lòng để lại thông tin liên lạc để chúng tôi có thể tư vấn rõ hơn
            về các khoá học
          </p>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Họ tên học viên*"
                  className="w-full p-3 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200"
                  required
                />
                <i className="fas fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="flex-1 relative mt-4 sm:mt-0">
                <input
                  type="text"
                  placeholder="Tuổi*"
                  className="w-full p-3 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200"
                  required
                />
                <i className="fas fa-calendar-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Tên phụ huynh"
                  className="w-full p-3 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200"
                />
                <i className="fas fa-user-friends absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="flex-1 relative mt-4 sm:mt-0">
                <input
                  type="text"
                  placeholder="Số điện thoại*"
                  className="w-full p-3 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200"
                  required
                />
                <i className="fas fa-phone-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div className="relative">
              <select className="text-black w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200">
                <option className="text-black">--Chọn cơ sở--</option>
                <option>Chương Dương</option>
                <option>Đạt Gia</option>
                <option>Hiệp Bình Phước</option>
                <option>Vinhomes</option>
                <option>Quận 9</option>
              </select>
              <i className="fas fa-graduation-cap absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-[#47AE31] text-white rounded-md hover:bg-[#ca9930] transition duration-200"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      </div>
  )
}

export default Contact