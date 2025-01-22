// Code: Trang chủ

import Highlight from "./component/highlight";
import Hero from "./component/hero";
import About from "./component/about";
import Benefit from "./component/Benefit";
import OtdCarousel from "./component/OtdStudents";
import TeacherCarousel from "./component/Class";
import Contact from "./component/Contact";
import SchoolTabs from "./component/SchoolTabs";
const HomePage = () => {
  return (
    <main className="py-3">
      <div className="mx-auto relative w-[95%] h-[80vh] overflow-hidden">
        {/* Giảm chiều rộng của container */}
        <div className="text-white rounded-lg shadow-lg relative w-full h-full">
          <img
            src="/anh1.png" // Sử dụng dấu gạch chéo cho đường dẫn
            className="w-full h-full object-cover rounded-lg"
            alt="Background"
          />
        </div>
      </div>
      <Hero />
      <Highlight />

      <About />

      <Benefit />

      <OtdCarousel />

      <TeacherCarousel />

      <Contact />

      <SchoolTabs />
    </main>
  );
};

export default HomePage;
