

// Icons
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Header = () => {
  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="h-20 container mx-auto sticky top-0 z-50">
        <div className="bg-zinc-800 h-full px-4 flex items-center justify-between">
          <a href="/">
            <div className="flex group/logo cursor-pointer">
              <div className="">
                <img src="/logo.png" alt="RIDER logo" className="h-12 w-12" />
              </div>
              <div className="flex flex-col justify-center ml-2">
                <div className="font-bold text-lg text-white group-hover/logo:text-yellow-400 transition-colors duration-500">
                  RIDER
                </div>
                <div className="text-sm text-white">Your Road, Your Ride</div>
              </div>
            </div>
          </a>
          <div className="flex gap-10 text-yellow-600">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-yellow-500 transition-colors duration-500 font-semibold"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className="hover:text-yellow-500 transition-colors  duration-500 font-semibold"
            >
              Features
            </a>
            <a
              href="#review"
              onClick={(e) => handleSmoothScroll(e, "review")}
              className="hover:text-yellow-500 transition-colors  duration-500 font-semibold"
            >
              Review
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="hover:text-yellow-500 transition-colors  duration-500 font-semibold"
            >
              Contact Us
            </a>
          </div>
          <div className="flex gap-6">
            <div className="border border-yellow-500 flex items-center w-40 py-2 px-4 rounded-full group">
              <IoSearchOutline className="text-yellow-500 group-hover:scale-[120%] transition-all duration-500  mr-2 size-5" />
              <input
                type="text"
                className="outline-none bg-transparent placeholder-white text-white w-full"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center justify-center bg-yellow-600 hover:bg-zinc-800 text-zinc-800 hover:text-yellow-600 rounded-full p-1 w-10 h-10 transition-colors duration-500 outline outline-zinc-800 hover:outline-yellow-600">
              <FaUser className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
