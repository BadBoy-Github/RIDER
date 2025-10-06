
const reviews = [
    {
        name: "name1",
        review: "review1",
        rating: 4,
    },
    {
        name: "name2",
        review: "review2",
        rating: 5,
    },
    {
        name: "name3",
        review: "review3",
        rating: 3,
    },
    {
        name: "name4",
        review: "review4",
        rating: 2,
    }
]

const Review = () => {
  return (
    <>
      <section id="review" className="h-[600px] container mx-auto">
        <div className="bg-orange-600 h-full w-full px-4">
          <div className="flex items-center justify-center bg-green-600 text-xl font-semibold h-[100px]">
            Review
          </div>
          <div className="bg-zinc-600 h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            {reviews.map((item, index) => (
              <div key={index} className="bg-white px-2 py-1 rounded-xl">
                <div className="text-lg font-semibold">
                  {item.name} | {item.rating} ⭐
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