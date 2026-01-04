const features = [
  {
    icon: "icon1",
    name: "name1name1name1name1name1name1name1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
  {
    icon: "icon2",
    name: "name2name2name2name2name2name2name2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
  {
    icon: "icon3",
    name: "name3name3name3name3name3name3name3",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
  {
    icon: "icon4",
    name: "name4name4name4name4name4name4name4",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
];

const Features = () => {
  return (
    <>
      <section id="feature" className="container mx-auto h-fit pt-16">
        <div className="h-full px-4">
          <div className="w-full flex items-center justify-center h-[10%] text-4xl py-16 font-semibold">
            Features
          </div>
          <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                className="bg-yellow-600 rounded-xl p-6 h-fit"
                key={index}
              >
                <div className="flex items-center justify-between pt-2 pb-4">
                  <div className="bg-white h-14 w-14 rounded-full p-2 flex items-center justify-center">{item.icon}</div>
                  <div className="text-white font-bold text-xl">{item.name}</div>
                </div>
                <div className="bg-yellow-500/40 rounded-lg p-2">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
