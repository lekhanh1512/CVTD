// Đây là component Sidebar, dùng để hiển thị menu chính của trang web khi ở chế độ mobile.

import { forwardRef } from "react";
import "./styles.css";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ isOpen, onClose }, ref) => {
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          ref={ref}
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-[90]`}
        >
          <div className="w-fuil flex items-center justify-center p-4">
            <img src="/logo.jpg" className="w-[50%]  " alt="" />
          </div>
          <div className="p-4 flex flex-col space-y-4">
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              href="#"
            >
              TRANG CHỦ
            </a>
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              href="#"
            >
              KHÓA HỌC <i className="fas fa-chevron-down"></i>
            </a>
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              href="#"
            >
              HỌC PHÍ <i className="fas fa-chevron-down"></i>
            </a>
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              href="#"
            >
              GIỚI THIỆU <i className="fas fa-chevron-down"></i>
            </a>
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              href="#"
            >
              GIẢI ĐẤU <i className="fas fa-chevron-down"></i>
            </a>
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              href="#"
            >
              TIN TỨC <i className="fas fa-chevron-down"></i>
            </a>
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300"
              href="#"
            >
              LIÊN HỆ <i className="fas fa-chevron-down"></i>
            </a>
            <a
              className="nav-link text-gray-700 hover:text-green-500 transition duration-300 flex items-center"
              href="#"
            >
              SHOP <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default Sidebar;
