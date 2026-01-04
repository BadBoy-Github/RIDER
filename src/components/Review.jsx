import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";

const reviews = [
  {
    name: "Sharath",
    review:
      "The best ride-sharing experience I've had! Quick pickup, clean cars, and professional drivers. Highly recommended for daily commutes.",
    rating: 4,
    role: "Software Engineer",
  },
  {
    name: "Gowtham Prakash",
    review:
      "Exceptional service! The app is intuitive, fares are transparent, and customer support actually responds. 5-star experience every time.",
    rating: 5,
    role: "Business Consultant",
  },
  {
    name: "Shalini",
    review:
      "Good service overall. Had one issue with a delayed pickup, but the discount offered as compensation was appreciated. Will continue using.",
    rating: 3,
    role: "Marketing Manager",
  },
  {
    name: "Vinay",
    review:
      "Reliable and affordable rides. Perfect for my weekly grocery trips. Drivers are always polite and the cars are well-maintained.",
    rating: 4,
    role: "College Student",
  },
  {
    name: "Balaji",
    review:
      "Absolutely fantastic! From booking to drop-off, everything is seamless. The premium rides are worth every penny for business trips.",
    rating: 5,
    role: "Sales Executive",
  },
  {
    name: "Ranjini",
    review:
      "Decent service, though I wish there were more female drivers available. The safety features in the app give me peace of mind.",
    rating: 3,
    role: "Graphic Designer",
  },
];

// Star rating component - JavaScript version (no TypeScript)
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar
        key={`full-${i}`}
        className="text-yellow-500 fill-current drop-shadow-sm"
      />
    );
  }

  // Half star
  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt
        key="half"
        className="text-yellow-500 fill-current drop-shadow-sm"
      />
    );
  }

  // Empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IoStarOutline key={`empty-${i}`} className="text-yellow-500/60" />
    );
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="ml-2 text-sm font-semibold text-yellow-700 bg-yellow-50 px-2 py-1 rounded">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const Review = () => {
  return (
    <section id="review" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x mb-4">
            What Our Riders Say
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Real experiences from our community of happy riders
          </p>

          {/* Stats Badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 text-yellow-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStarHalfAlt className="text-yellow-500 mr-2" />
            </div>
            <span className="text-orange-600">•</span>
            <span className="font-bold">4.8</span>
            <span className="text-orange-600">•</span>
            <span>Based on 2,500+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/5 via-yellow-400/10 to-transparent rounded-tr-2xl overflow-hidden">
                <div className="absolute top-2 right-2 text-3xl text-yellow-400/30">
                  ★
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={item.rating} />
                <div className="text-xs text-orange-600 font-medium px-3 py-1.5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-full border border-orange-200">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Verified Rider
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div className="relative mb-6">
                <div className="absolute -top-3 -left-3 text-4xl text-yellow-200 opacity-80">
                  "
                </div>
                <p className="text-zinc-700 leading-relaxed italic pl-4">
                  {item.review}
                </p>
                <div className="absolute -bottom-3 -right-3 text-4xl text-yellow-200 opacity-80 transform rotate-180">
                  "
                </div>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-orange-50">
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 flex items-center gap-2">
                    {item.name}
                    <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full">
                      <FaStar
                        className="inline mr-1 text-yellow-500"
                        size={10}
                      />
                      Top Reviewer
                    </span>
                  </h4>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>

                {/* Avatar with Star Badge */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {item.name.charAt(0)}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <FaStar className="text-white" size={10} />
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-50/0 via-orange-50/0 to-yellow-50/0 group-hover:from-yellow-50/20 group-hover:via-orange-50/10 group-hover:to-yellow-50/20 transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 rounded-2xl shadow-xl p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Floating Stars Background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-yellow-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 20 + 10}px`,
                  animation: `float ${
                    Math.random() * 10 + 10
                  }s linear infinite`,
                }}
              >
                ★
              </div>
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="relative">
              <div className="text-4xl lg:text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                10K+
                <FaStar className="text-yellow-300" />
              </div>
              <div className="text-yellow-100 text-sm lg:text-base">
                Happy Riders
              </div>
            </div>
            <div className="relative">
              <div className="text-4xl lg:text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                4.8
                <div className="flex">
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStar className="text-yellow-300" />
                  <FaStarHalfAlt className="text-yellow-300" />
                </div>
              </div>
              <div className="text-yellow-100 text-sm lg:text-base">
                Average Rating
              </div>
            </div>
            <div className="relative">
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-yellow-100 text-sm lg:text-base">
                On-time Rides
              </div>
            </div>
            <div className="relative">
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-yellow-100 text-sm lg:text-base">
                Support
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-10 text-center mt-10 pt-6 border-t border-orange-400/30">
            <p className="text-yellow-100 mb-4 text-lg font-medium">
              Join thousands of satisfied riders today
            </p>
            <button className="bg-white hover:bg-yellow-50 text-orange-600 hover:text-orange-700 hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 rounded-full shadow-lg flex items-center gap-2 mx-auto">
              <FaStar className="text-yellow-500" />
              Book Your First Ride
              <FaStar className="text-yellow-500" />
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-gradient-to-br from-orange-600/5 to-yellow-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Review;
