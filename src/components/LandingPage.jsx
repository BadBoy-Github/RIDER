
// Components
import Search from "./Search";

// Icons
import { FaShippingFast } from "react-icons/fa";
import { GiRobber } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const desc = [
  {
    icon: <FaShippingFast />,
    title: "Lightning-Fast Rides",
    content:
      "Book instantly and hit the road in minutes — no waiting, no hassle.",
  },
  {
    icon: <GiRobber />,
    title: "No Hidden Fees",
    content:
      "Enjoy transparent fares with 0% commission and full value for every ride.",
  },
  {
    icon: <RiCustomerService2Fill />,
    title: "24/7 Support",
    content: "Our team’s always here to help, anytime you need us.",
  },
];

const LandingPage = () => {
  return (
    <section id="home" className="container mx-auto h-[800px]">
      <div className="h-full bg-zinc-100">
        <div className="h-[26%] lg:h-[40%] flex flex-col items-center justify-start pb-10 lg:justify-center pt-2 lg:pt-0 text-white">
          <h1 className="text-[30px] lg:text-[50px] font-bold ">
            <button class="button" data-text="Awesome">
              <span class="actual-text">&nbsp;RIDER&nbsp;</span>
              <span aria-hidden="true" class="hover-text">
                &nbsp;RIDER&nbsp;
              </span>
            </button>
          </h1>
          <p className="text-[16px] lg:text-lg text-zinc-600">
            <em>
              "The <b className="text-yellow-500">Right Ride</b> for Every{" "}
              <b className="text-yellow-500">Road</b> and{" "}
              <b className="text-yellow-500">Mood</b>"
            </em>
          </p>
        </div>

        <div className="h-[70%] lg:h-[60%] bg-yellow-600 flex flex-col items-center justify-end pb-10 relative">
          <h2 className=" mb-6 heading">Why Choose Us</h2>
          <div className="grid grid-cols-3 px-8 w-full gap-10">
            {desc.map((item, index) => (
              <div
                key={index}
                className="bg-white/50 p-2 text-end flex flex-col justify-center items-center h-40 rounded-lg"
              >
                <div className="flex items-center justify-between w-full h-full px-4">
                  <div className=" bg-yellow-600 w-28 h-28 rounded-lg flex items-center justify-center overflow-hidden text-5xl">{item.icon}</div>
                  <div className="flex flex-col items-end justify-start h-full w-[70%]">
                    <div className="text-lg font-semibold mt-2">
                      {item.title}
                    </div>
                    <div className="text-gray-600 mt-2">{item.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute w-full -top-10 h-[200px]  flex items-center justify-center">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
