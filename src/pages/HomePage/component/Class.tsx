// Code: TeacherCarousel component

import Carousel from "./Carousel";

const TeacherCarousel = () => {
  const teacher = [
    {
      title: "Environmental Studies & Earth Sciences",
      teacher: "Polina Kerston",
      price: "$45",
      days: "Mon-Fri",
      time: "10 AM - 12 AM",
      imageUrl:
        "https://shelly.merku.love/wp-content/uploads/2020/11/girl-doing-homework-or-online-education-R72VXGD-270x180.jpg",
      teacherImage:
        "https://shelly.merku.love/wp-content/uploads/2020/11/img5-150x150.png",
      link: "https://shelly.merku.love/classes/environmental-studies-earth-sciences/",
      teacherLink: "https://shelly.merku.love/teacher/polina-kerston/",
    },
    {
      title: "Hospitality, Leisure & Sports Courses",
      teacher: "Vincent Luggers",
      price: "$45",
      days: "Mon-Fri",
      time: "10 AM - 12 AM",
      imageUrl:
        "https://shelly.merku.love/wp-content/uploads/2020/11/class4-270x180.png",
      teacherImage:
        "https://shelly.merku.love/wp-content/uploads/2020/11/teacher7-150x150.png",
      link: "https://shelly.merku.love/classes/hospitality-leisure-sports-courses/",
      teacherLink: "https://shelly.merku.love/teacher/vincent-luggers/",
    },
    {
      title: "Basic English Speaking and Grammar",
      teacher: "Dai Jiang",
      price: "$45",
      days: "Mon-Fri",
      time: "10 AM - 12 AM",
      imageUrl:
        "https://shelly.merku.love/wp-content/uploads/2020/11/class5-270x180.png",
      teacherImage:
        "https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png",
      link: "https://shelly.merku.love/classes/basic-english-speaking-and-grammar-2/",
      teacherLink: "https://shelly.merku.love/teacher/dai-jiang/",
    },
    {
      title: "Natural Sciences & Mathematics Courses",
      teacher: "Dai Jiang",
      price: "$45",
      days: "Mon-Fri",
      time: "10 AM - 12 AM",
      imageUrl:
        "https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png",
      teacherImage:
        "https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png",
      link: "https://shelly.merku.love/classes/natural-sciences-mathematics-courses/",
      teacherLink: "https://shelly.merku.love/teacher/dai-jiang/",
    },
    {
      title: "Natural Sciences & Mathematics Courses",
      teacher: "Dai Jiang",
      price: "$45",
      days: "Mon-Fri",
      time: "10 AM - 12 AM",
      imageUrl:
        "https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png",
      teacherImage:
        "https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png",
      link: "https://shelly.merku.love/classes/natural-sciences-mathematics-courses/",
      teacherLink: "https://shelly.merku.love/teacher/dai-jiang/",
    },
    {
      title: "Natural Sciences & Mathematics Courses",
      teacher: "Dai Jiang",
      price: "$45",
      days: "Mon-Fri",
      time: "10 AM - 12 AM",
      imageUrl:
        "https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png",
      teacherImage:
        "https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png",
      link: "https://shelly.merku.love/classes/natural-sciences-mathematics-courses/",
      teacherLink: "https://shelly.merku.love/teacher/dai-jiang/",
    },
  ]; // Add more class objects as needed ];
  return (
    <div>
      <div className="text-center mb-12 ">
        <h1 className="text-4xl font-bold">
          Đội Ngũ&nbsp;
          <span className="text-[#47AE34]">Giáo Viên</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Chúng tôi tự hào có đội ngũ giáo viên tận tâm, giàu kinh nghiệm, luôn
          sẵn sàng hỗ trợ học viên phát triển toàn diện với phương pháp giảng
          dạy hiện đại và sáng tạo.
        </p>
      </div>
      <Carousel classes={teacher} />
    </div>
  );
};

export default TeacherCarousel;
