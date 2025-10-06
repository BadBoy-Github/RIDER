const features = [
  {
    icon: "icon1",
    name: "name1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
  {
    icon: "icon2",
    name: "name2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
  {
    icon: "icon3",
    name: "name3",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
  {
    icon: "icon4",
    name: "name4",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores tempora reiciendis nisi obcaecati vel ipsa tenetur totam maiores harum impedit? Quisquam excepturi quidem soluta reprehenderit animi, officia delectus nihil ut voluptas corrupti autem, corporis porro saepe provident. Accusamus corrupti sed ratione non neque hic alias assumenda, dignissimos quo quisquam asperiores.",
  },
];

const Features = () => {
  return (
    <>
      <section id="features" className="container mx-auto h-[800px]">
        <div className="bg-sky-600 h-full px-4">
          <div className="w-full flex items-center justify-center h-[10%] bg-red-600 text-xl font-semibold">
            Features
          </div>
          <div className="h-[80%] w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-1 bg-amber-600">
            {features.map((item, index) => (
              <div
                className="bg-white rounded-xl p-2"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <div className="">{item.icon}</div>
                  <div className="">{item.name}</div>
                </div>
                <div className="">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
