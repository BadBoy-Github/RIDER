

// Icons
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";

// Components
import styled from "styled-components";

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
        <div className="bg-yellow-600 shadow-xl  h-full px-4 flex items-center justify-between">
          <div className="flex items-center justify-start" id="header">
            <a href="/">
              <div className="flex group/logo cursor-pointer">
                <div className="flex items-center justify-center bg-white p-2 rounded-full w-12 h-12 mr-2">
                  <BsFillCarFrontFill className="text-yellow-600 group-hover/logo:scale-[120%] transition-all duration-500 size-6 " />
                </div>
                <div className="hidden lg:flex flex-col justify-center ml-2">
                  <div className="font-bold text-lg text-zinc-100 group-hover/logo:text-white transition-colors duration-300">
                    RIDER
                  </div>
                  <div className="text-sm text-white">Your Road, Your Ride</div>
                </div>
              </div>
            </a>
            <div className="flex lg:hidden items-center justify-center ml-4 bg-white w-12 h-12 rounded-full">
              <StyledWrapper>
                <label className="hamburger">
                  <input type="checkbox" />
                  <svg viewBox="0 0 32 32">
                    <path
                      className="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    />
                    <path className="line" d="M7 16 27 16" />
                  </svg>
                </label>
              </StyledWrapper>
            </div>
          </div>

          <div className=" hidden lg:flex gap-10 text-yellow-200">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="hover:text-white border-b-2 border-yellow-600 hover:border-white transition-colors duration-500 font-semibold"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "feature")}
              className="hover:text-white border-b-2 border-yellow-600 hover:border-white transition-colors  duration-500 font-semibold"
            >
              Feature
            </a>
            <a
              href="#review"
              onClick={(e) => handleSmoothScroll(e, "review")}
              className="hover:text-white border-b-2 border-yellow-600 hover:border-white transition-colors  duration-500 font-semibold"
            >
              Review
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="hover:text-white border-b-2 border-yellow-600 hover:border-white transition-colors  duration-500 font-semibold"
            >
              Contact
            </a>
          </div>
          <div className="flex gap-6">
            <div className="hidden lg:flex border border-zinc-200 items-center w-40 py-2 px-4 rounded-full group">
              <IoSearchOutline className="text-white group-hover:scale-[120%] transition-all duration-500  mr-2 size-5" />
              <input
                type="text"
                className="outline-none bg-transparent placeholder-zinc-200 text-white w-full"
                placeholder="Search..."
              />
            </div>
            <div className="flex lg:hidden text-yellow-600 bg-white  items-center justify-center rounded-full w-10 h-10 hover:text-white hover:bg-yellow-600  transition-colors duration-500 cursor-pointer hover:outline">
              <IoSearchOutline className="size-6" />
            </div>
            <div className="flex items-center justify-center bg-white hover:bg-yellow-600 text-yellow-600 hover:text-white rounded-full p-1 w-10 h-10 transition-colors duration-500  mr-4 relative group/arr cursor-pointer hover:outline">
              <FaUser className="" />
              <FaAngleDown className="absolute -right-1 -bottom-1 bg-yellow-600 text-white rounded-full p-1 group-hover/arr:bg-white group-hover/arr:text-yellow-600 transition-colors duration-500  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 2em;

    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #cf8600;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;

    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

export default Header;
