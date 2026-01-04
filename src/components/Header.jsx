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
      <div className="h-20 container mx-auto sticky top-0 z-50 px-4">
        {/* Modern Header Container */}
        <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 h-full rounded-b-2xl shadow-2xl shadow-yellow-600/30 backdrop-blur-sm backdrop-saturate-150 flex items-center justify-between px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center justify-start" id="header">
            <a href="/" className="group">
              <div className="flex items-center cursor-pointer">
                {/* Logo Icon with modern effects */}
                <div className="relative flex items-center justify-center bg-white p-2 rounded-full w-14 h-14 mr-3 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <BsFillCarFrontFill className="text-yellow-600 group-hover:scale-110 transition-transform duration-500 size-7 relative z-10" />
                  <div className="absolute -inset-1 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Logo Text */}
                <div className="hidden lg:flex flex-col justify-center ml-1">
                  <div className="font-extrabold text-xl text-white group-hover:text-yellow-100 transition-colors duration-300 tracking-tight">
                    RIDER
                  </div>
                  <div className="text-xs text-yellow-100/80 font-medium tracking-wide mt-0.5">
                    Your Road, Your Ride
                  </div>
                </div>
              </div>
            </a>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center justify-center ml-6 bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
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

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex gap-8 text-yellow-100">
            {[
              { id: "home", label: "Home" },
              { id: "feature", label: "Features" },
              { id: "review", label: "Reviews" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="relative px-1 py-2 font-semibold text-yellow-100 hover:text-white transition-colors duration-300 group/nav"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover/nav:w-full transition-all duration-500" />
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white/50 rounded-full transform -translate-x-1/2 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex relative group">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full blur-sm group-hover:blur-md transition-all duration-500" />
              <div className="relative flex border border-white/30 items-center w-48 py-3 px-5 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-all duration-300">
                <IoSearchOutline className="text-white group-hover:scale-110 transition-transform duration-300 mr-3 size-5" />
                <input
                  type="text"
                  className="outline-none bg-transparent placeholder-yellow-100/70 text-white w-full text-sm font-medium"
                  placeholder="Search destinations..."
                />
              </div>
            </div>

            {/* Search Icon - Mobile */}
            <div className="flex lg:hidden relative group">
              <div className="flex text-yellow-600 bg-white items-center justify-center rounded-full w-11 h-11 hover:text-white hover:bg-yellow-500 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
                <IoSearchOutline className="size-6" />
              </div>
            </div>

            {/* User Profile */}
            <div className="relative group">
              <div className="flex items-center justify-center bg-white hover:bg-yellow-500 text-yellow-600 hover:text-white rounded-full w-11 h-11 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <FaUser className="size-5 relative z-10" />
                <FaAngleDown className="absolute -right-1 -bottom-1 bg-yellow-600 text-white rounded-full p-1.5 group-hover:bg-white group-hover:text-yellow-600 transition-all duration-300 shadow-md size-4" />
              </div>

              {/* User dropdown indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
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
    height: 1.8em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #ffffff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.5;
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
