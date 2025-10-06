const desc = [
  {
    icon: "icon1",
    title: "title1",
    content: "content2",
  },
  {
    icon: "icon2",
    title: "title2",
    content: "content2",
  },
  {
    icon: "icon3",
    title: "title3",
    content: "content3",
  },
];

const LandingPage = () => {
  return (
    <div className="container mx-auto h-[500px] lg:h-[600px]">
      <div className="h-full px-4 bg-zinc-200">
        <div className="h-[30%] lg:h-[40%] flex flex-col items-center justify-start pb-10 lg:justify-center pt-2 lg:pt-0 text-white">
          <h1 className="text-[50px] font-bold ">
            <button class="button" data-text="Awesome">
              <span class="actual-text">&nbsp;RIDER&nbsp;</span>
              <span aria-hidden="true" class="hover-text">
                &nbsp;RIDER&nbsp;
              </span>
            </button>
          </h1>
          <p className="text-lg text-zinc-800">
            <em>
              <span className="text-yellow-400">"</span>The <b>Right Ride</b>{" "}
              for Every <b>Road</b> and <b>Mood</b>
              <span className="text-yellow-400">"</span>
            </em>
          </p>
        </div>

        <div className="h-[70%] lg:h-[60%] bg-yellow-600 flex flex-col items-center justify-center relative">
          <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
          <div className="grid grid-cols-3 px-8 w-full gap-10">
            {desc.map((item, index) => (
              <div
                key={index}
                className="bg-white/50 p-4 text-center flex flex-col items-center"
              >
                <div className="text-4xl">{item.icon}</div>
                <div className="text-lg font-semibold mt-2">{item.title}</div>
                <div className="text-gray-600 mt-1">{item.content}</div>
              </div>
            ))}
          </div>
          <div className="absolute bg-red-600 w-full -top-10 h-20  flex items-center justify-center">
            search
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
