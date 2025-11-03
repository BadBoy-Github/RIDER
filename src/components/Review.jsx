
const reviews = [
  {
    name: "Sharath",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque sunt obcaecati, voluptas incidunt esse nam eos quidem quibusdam eligendi!",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Gowtham Prakash",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque sunt obcaecati, voluptas incidunt esse nam eos quidem quibusdam eligendi!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Shalini",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque sunt obcaecati, voluptas incidunt esse nam eos quidem quibusdam eligendi!",
    rating: "⭐⭐⭐",
  },
  {
    name: "Vinay",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque sunt obcaecati, voluptas incidunt esse nam eos quidem quibusdam eligendi!",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Balaji",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque sunt obcaecati, voluptas incidunt esse nam eos quidem quibusdam eligendi!",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Ranjini",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque sunt obcaecati, voluptas incidunt esse nam eos quidem quibusdam eligendi!",
      rating: "⭐⭐⭐"
  },
];

const Review = () => {
  return (
    <>
      <section id="review" className="h-fit container mx-auto">
        <div className="bg-orange-600 h-full w-full px-4">
          <div className="flex items-center justify-center bg-green-600 text-4xl py-10 font-semibold h-[100px]">
            Review
          </div>
          <div className="bg-zinc-600 h-fit grid grid-cols-1 lg:grid-cols-2 gap-4">
            {reviews.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl h-fit">
                <div className="text-lg font-semibold">
                  {item.name} | {item.rating}
                </div>
                <div className="text-sm">{item.review}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Review