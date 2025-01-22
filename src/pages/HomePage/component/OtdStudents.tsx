import { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OtdCarousel = () => {
  const swiperRef = useRef<any>(null);

  const teachers = [
    {
      name: "Polina Kerston",
      subject: "English Teacher",
      imageUrl: "https://placehold.co/300x400",
    },
    {
      name: "Faadi Al Rahman",
      subject: "Instructor",
      imageUrl: "https://placehold.co/300x400",
    },
    {
      name: "Chikelu Obasea",
      subject: "Art Teacher",
      imageUrl: "https://placehold.co/300x400",
    },
    {
      name: "Katayama Fumiki",
      subject: "Giáo Viên",
      imageUrl: "https://placehold.co/300x400",
    },
    {
      name: "Faadi Al Rahman",
      subject: "Instructor",
      imageUrl: "https://placehold.co/300x400",
    },
    {
      name: "Faadi Al Rahman",
      subject: "Instructor",
      imageUrl: "https://placehold.co/300x400",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Học viên&nbsp;
          <span className="text-[#47AE34]">xuất sắc</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Chúng tôi tự hào mang đến môi trường học tập sáng tạo, nơi mỗi học
          viên đều có cơ hội phát triển tối đa tiềm năng của mình.
        </p>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                alt={teacher.name}
                className="w-full h-64 object-cover rounded-t-lg"
                src={teacher.imageUrl}
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">{teacher.name}</h2>
                <p className="text-blue-500">{teacher.subject}</p>
              </div>
              <div className="text-center mt-4">
                <button className="text-orange-500">
                  <i className="fas fa-share-alt"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end text-3xl space-x-5 mt-4 text-green-600">
        <div
          className="cursor-pointer hover:transform hover:scale-150"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          ‹
        </div>
        <div
          className="cursor-pointer hover:transform hover:scale-150"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          ›
        </div>
      </div>
    </div>
  );
};

export default OtdCarousel;
