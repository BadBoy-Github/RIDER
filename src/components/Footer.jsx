import {
  BsFillCarFrontFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsArrowUpCircle,
} from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block group">
              <div className="flex items-center mb-6">
                <div className="relative flex items-center justify-center bg-white p-3 rounded-full w-16 h-16 mr-4 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <BsFillCarFrontFill className="text-yellow-600 group-hover:scale-110 transition-transform duration-500 size-8 relative z-10" />
                  <div className="absolute -inset-1 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <div className="font-extrabold text-2xl text-white group-hover:text-yellow-100 transition-colors duration-300">
                    RIDER
                  </div>
                  <div className="text-yellow-100/80 text-sm font-medium tracking-wide">
                    Your Road, Your Ride
                  </div>
                </div>
              </div>
            </a>
            <p className="text-yellow-100/90 mb-6 leading-relaxed">
              Experience the future of ride-sharing with seamless booking,
              transparent pricing, and premium service for every journey.
            </p>
            <div className="flex items-center gap-4">
              {[BsFacebook, BsTwitter, BsInstagram, BsLinkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="text-white hover:text-yellow-100 transition-colors duration-300" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-yellow-400/30 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { id: "home", label: "Home" },
                { id: "feature", label: "Features" },
                { id: "review", label: "Reviews" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="flex items-center gap-3 text-yellow-100/90 hover:text-white transition-colors duration-300 group/link"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    <span>{item.label}</span>
                    <div className="ml-auto w-0 h-px bg-yellow-400 group-hover/link:w-4 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-yellow-400/30 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <FaPhoneAlt className="text-yellow-300" />
                </div>
                <div>
                  <div className="text-yellow-100/90 text-sm">Phone</div>
                  <div className="font-medium">+1 (555) 123-4567</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <FaEnvelope className="text-yellow-300" />
                </div>
                <div>
                  <div className="text-yellow-100/90 text-sm">Email</div>
                  <div className="font-medium">support@rider.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <FaMapMarkerAlt className="text-yellow-300" />
                </div>
                <div>
                  <div className="text-yellow-100/90 text-sm">Address</div>
                  <div className="font-medium">123 Ride Street</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-yellow-400/30 inline-block">
              Newsletter
            </h3>
            <p className="text-yellow-100/90 mb-4">
              Subscribe to get updates on new features and offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-yellow-100/50 transition-all"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400/30 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-yellow-100/80 text-sm">
            © {new Date().getFullYear()} Rider. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-yellow-100/80 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-yellow-100/80 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-yellow-100/80 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 group"
          >
            Back to Top
            <BsArrowUpCircle className="text-yellow-300 group-hover:translate-y-[-2px] transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Apps Badge */}
        <div className="mt-10 pt-6 border-t border-yellow-400/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="text-yellow-100/90 mb-2">Download our app</div>
              <div className="flex items-center gap-3">
                <a href="#" className="inline-block">
                  <div className="px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg flex items-center gap-2 hover:bg-black/40 transition-all duration-300">
                    <div className="text-2xl">📱</div>
                    <div className="text-left">
                      <div className="text-xs text-yellow-100/70">
                        Get it on
                      </div>
                      <div className="font-bold">Google Play</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="inline-block">
                  <div className="px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg flex items-center gap-2 hover:bg-black/40 transition-all duration-300">
                    <div className="text-2xl">📱</div>
                    <div className="text-left">
                      <div className="text-xs text-yellow-100/70">
                        Download on the
                      </div>
                      <div className="font-bold">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-yellow-100/90 mb-2">Trust & Safety</div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs font-medium">
                  🔒 SSL Secure
                </div>
                <div className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-medium">
                  ⭐ 4.8 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Car */}
      <div className="absolute bottom-10 right-10 opacity-5">
        <BsFillCarFrontFill size={120} />
      </div>
    </footer>
  );
};

export default Footer;
