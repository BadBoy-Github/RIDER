import { BsFillCarFrontFill } from "react-icons/bs";

const Footer = () => {

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
      <div className="h-28 container mx-auto">
        <div className="bg-fuchsia-600 h-fit px-4 flex items-center justify-between">
          <div className="">
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
          </div>
          <div className="h-fit p-4 mr-6">
            <h1 className="text-lg font-semibold">Sitemap</h1>
            <ol className="flex flex-col">
              <li>
                <a href="/" onClick={(e) => handleSmoothScroll(e, "home")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="features"
                  onClick={(e) => handleSmoothScroll(e, "feature")}
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  href="review"
                  onClick={(e) => handleSmoothScroll(e, "review")}
                >Review</a>
              </li>
              <li>
                <a
                  href="contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                >Contact</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
