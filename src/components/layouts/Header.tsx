// Đây là component Header, nơi bạn sẽ đặt phần header của trang web

import React, { useState } from "react";
import "./styles.css"; // Đảm bảo bạn đã import file CSS
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar"; // Nhập component Sidebar

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex flex-col md:flex-row items-center justify-between md:px-20 md:py-4 p-4 font-roboto font-medium shadow-custom bg-white z-50">
        <div className="flex items-center justify-between w-full md:w-[40%]">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              alt="Logo with a chess piece inside a shield"
              className="h-20"
              src="/logo.jpg"
            />
            <div className="mx-2 ">
              <h1 className="text-[#2e773a] text-md md:text-2xl font-bold">
                {/* Thay đổi kích thước chữ ở đây */}
                CLB CỜ VUA TP.THỦ ĐỨC
              </h1>
              <p className="text-[#48bd5b] text-xs md:text-sm">
                {" "}
                {/* Thay đổi kích thước chữ ở đây */}
                NUÔI DƯỠNG ĐAM MÊ, ƯƠM MẦM TRÍ TUỆ
              </p>
            </div>
          </div>
          <div className="md:hidden">
            <button className="menu-button" onClick={toggleMenu}>
              <Menu />
            </button>
          </div>
        </div>
        {/* Hiển thị sidebar khi ở chế độ mobile */}
        <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />

        {/* Menu chính chỉ hiển thị trên màn hình lớn */}
        <nav
          className={`hidden md:flex flex-wrap items-center justify-center md:justify-end space-x-4 md:space-x-6 md:w-full`}
        >
          <a className="nav-link" href="#">
            TRANG CHỦ
          </a>
          <a className="nav-link" href="#">
            KHÓA HỌC <i className="fas fa-chevron-down"></i>
          </a>
          <a className="nav-link" href="#">
            HỌC PHÍ <i className="fas fa-chevron-down"></i>
          </a>
          <a className="nav-link" href="#">
            GIỚI THIỆU <i className="fas fa-chevron-down"></i>
          </a>
          <a className="nav-link" href="#">
            GIẢI ĐẤU <i className="fas fa-chevron-down"></i>
          </a>
          <a className="nav-link" href="#">
            TIN TỨC <i className="fas fa-chevron-down"></i>
          </a>
          <a className="nav-link" href="#">
            LIÊN HỆ <i className="fas fa-chevron-down"></i>
          </a>
          <a className="nav-link" href="#">
            SHOP <i className="fas fa-shopping-cart"></i>
          </a>
        </nav>
      </header>

      {/* Thêm khoảng cách cho nội dung bên dưới */}
      <div className="pt-24">
        {" "}
        {/* Thay đổi giá trị pt-24 tùy thuộc vào chiều cao của header */}
        {/* Nội dung chính của bạn ở đây */}
      </div>
    </>
  );
};

export default Header;
