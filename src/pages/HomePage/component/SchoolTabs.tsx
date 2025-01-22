import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // Import các biểu tượng từ react-icons

const SchoolTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const coso = [
    {
      name: "Cơ sở Chương Dương",
      address: "26 Chương Dương, P, TP. Thủ Đức, Hồ Chí Minh",
      phone: "0333 220 058",
      area: "Thủ Đức",
    },
    {
      name: "Cơ sở Đạt Gia",
      address: "00.09 Chung Cư Đạt Gia, Cây Keo, Tam Phú, TP. Thủ đức, Thủ Đức, Hồ Chí Minh",
      phone: "0333 220 058",
      area: "Thủ Đức",
    },
    {
      name: "Cơ sở Hiệp Bình Phước",
      address: "23 Đ. số 4, Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh",
      phone: "0333 220 058",
      area: "Thủ Đức",
    },
    {
      name: "Cơ sở Quận 9",
      address: "343 Lê Văn Việt, Hiệp Phú, Quận 9, Hồ Chí Minh",
      phone: "0333 220 058",
      area: "Quận 9",
    },
    {
      name: "Cơ sở Vinhomes Grand Park",
      address: "Origami S10.01 VINHOMES GRAND PARK, 211 Phước Thiện, Long Bình, Quận 9, Hồ Chí Minh",
      phone: "0333 220 058",
      area: "Quận 9",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`tab-button ${
            activeTab === "tab1"
              ? "bg-[#47ae31] text-white"
              : "border border-[#47ae31] text-[#47ae31]"
          } py-2 px-4 rounded-full`}
          onClick={() => handleTabClick("tab1")}
        >
          Cụm Cơ Sở Thủ Đức
        </button>
        <button
          className={`tab-button ${
            activeTab === "tab2"
              ? "bg-[#47ae31] text-white"
              : "border border-[#47ae31] text-[#47ae31]"
          } py-2 px-4 rounded-full`}
          onClick={() => handleTabClick("tab2")}
        >
          Cụm Cơ Sở Quận 9
        </button>
      </div>

      <div
        id="tab1"
        className={`tab-content ${activeTab === "tab1" ? "" : "hidden"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*--Cụm Cơ Sở Thủ Đức--*/}
          {coso
            .filter((school) => school.area === "Thủ Đức") // Lọc các cơ sở ở Thủ Đức
            .map((school, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-xl font-bold text-gray-800 my-1">{school.name}</h2>
                <p className="text-gray-600 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[#47ae31]" /> {school.address}
                </p>
                <p className="text-gray-600 flex items-center">
                  <FaPhoneAlt className="mr-2 text-[#47ae31]" /> {school.phone}
                </p>
                <p className="text-[#47ae31] flex items-center mt-1">
                 Xem chi tiết
                </p>
              </div>
            ))}
        </div>
      </div>

      <div
        id="tab2"
        className={`tab-content ${activeTab === "tab2" ? "" : "hidden"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*--Cụm Cơ Sở Quận 9--*/}
          {coso
            .filter((school) => school.area === "Quận 9") // Lọc các cơ sở ở Quận 9
            .map((school, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-xl font-bold text-gray-800 my-1">{school.name}</h2>
                <p className="text-gray-600 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[#47ae31]" /> {school.address}
                </p>
                <p className="text-gray-600 flex items-center">
                  <FaPhoneAlt className="mr-2 text-[#47ae31]" /> {school.phone}
                </p>
                <p className="text-[#47ae31] flex items-center mt-1">
                  Xem chi tiết
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolTabs;