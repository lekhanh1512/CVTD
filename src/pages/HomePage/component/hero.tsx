import "../css/animate.css";
import { Award, GraduationCap, School, User } from "lucide-react";
const hero = () => {
  return (
    <div className="mx-auto max-w-6xl -mt-10 p-0" id="gdlr-core-wrapper-1">
        <div className="bg-[#47ae31] text-white shadow-lg rounded-lg z-[5] relative p-4">
          <div className="flex flex-wrap">
            {/* Service Item 1 */}
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="flex flex-col mb-4">
                <div className=" flex items-center justify-center">
                  <GraduationCap size={50} />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-semibold">
                    Học viên
                  </h3>
                  <div className="text-center text-xl font-medium">200+</div>
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="flex flex-col mb-4">
                <div className=" flex items-center justify-center">
                  <Award size={50} />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-semibold">
                    Thành Tích
                  </h3>
                  <div className="text-center text-xl font-medium">50+</div>
                </div>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="flex flex-col mb-4">
                <div className=" flex items-center justify-center">
                  <School size={50} />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-semibold">Cơ sở</h3>
                  <div className="text-center text-xl font-medium">5</div>
                </div>
              </div>
            </div>

            {/* Service Item 4 */}
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="flex flex-col mb-4">
                <div className=" flex items-center justify-center">
                  <User size={50} />
                </div>
                <div>
                  <h3 className="text-center text-2xl font-semibold">
                    Giáo Viên
                  </h3>
                  <div className="text-center text-xl font-medium">15+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default hero