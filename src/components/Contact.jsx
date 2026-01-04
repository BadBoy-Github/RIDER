import { useState } from "react";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaIdCard,
  FaVenusMars,
} from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  const handleMessageChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setMessage(value);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you with your
            ride needs.
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-3xl shadow-2xl shadow-yellow-600/20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:50px_50px]" />

          <div className="relative z-10 flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="p-6 lg:p-10 w-full lg:w-[70%]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle form submission here
                  console.log("Form submitted");
                }}
                className="bg-white/95 backdrop-blur-sm p-8 lg:p-10 rounded-2xl w-full max-w-4xl mx-auto shadow-2xl border border-yellow-100"
              >
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl">
                    <FaPaperPlane className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">
                      Send us a Message
                    </h3>
                    <p className="text-zinc-600 text-sm">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2 flex items-center gap-2"
                    >
                      <FaUser className="text-yellow-600" />
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter Your Full Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white/80 group-hover:bg-white group-hover:shadow-sm"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2 flex items-center gap-2"
                    >
                      <FaEnvelope className="text-yellow-600" />
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white/80 group-hover:bg-white group-hover:shadow-sm"
                      required
                    />
                  </div>
                </div>

                {/* Designation & Gender Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label
                      htmlFor="designation"
                      className="block text-gray-700 font-medium mb-2 flex items-center gap-2"
                    >
                      <FaIdCard className="text-yellow-600" />
                      Designation
                    </label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      placeholder="e.g., Software Engineer, Student, etc."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white/80 group-hover:bg-white group-hover:shadow-sm"
                      required
                    />
                  </div>
                  <div className="group">
                    <label
                      htmlFor="gender"
                      className="block text-gray-700 font-medium mb-2 flex items-center gap-2"
                    >
                      <FaVenusMars className="text-yellow-600" />
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white/80 group-hover:bg-white group-hover:shadow-sm appearance-none"
                      required
                    >
                      <option value="" disabled selected>
                        Select Your Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 mt-9 text-gray-400">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-8 group">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2 flex items-center gap-2"
                  >
                    <FaPaperPlane className="text-yellow-600" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    placeholder="Tell us about your ride requirements, questions, or feedback..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white/80 group-hover:bg-white group-hover:shadow-sm resize-none"
                    value={message}
                    onChange={handleMessageChange}
                    required
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-2 flex justify-between">
                    <span>Maximum 500 characters</span>
                    <span
                      className={`font-medium ${
                        message.length > maxChars * 0.9
                          ? "text-red-500"
                          : message.length > maxChars * 0.8
                          ? "text-yellow-500"
                          : "text-yellow-600"
                      }`}
                    >
                      {message.length}/{maxChars}
                      {message.length > maxChars * 0.9 && " ⚠️"}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="group relative px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={message.length === 0 || message.length > maxChars}
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-75" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="p-6 lg:p-10 w-full lg:w-[30%]">
              <div className="h-full flex flex-col justify-center bg-gradient-to-br from-yellow-600/90 to-yellow-700/90 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  Contact Information
                </h3>

                {/* Contact Items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                      <FaPhoneAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Call Us</h4>
                      <p className="text-yellow-100 text-sm">
                        +91 98765 43210
                      </p>
                      <p className="text-yellow-100 text-sm">
                        24/7 Customer Support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Email Us
                      </h4>
                      <p className="text-yellow-100 text-sm">
                        support@rider.com
                      </p>
                      <p className="text-yellow-100 text-sm">info@rider.com</p>
                    </div>
                  </div>
                </div>
                {/* Emergency Contact */}
                <div className="mt-6 p-4 bg-white/10 rounded-xl border border-yellow-400/20">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    Emergency Support
                  </h4>
                  <p className="text-yellow-100 text-sm">+91 98765 43210</p>
                  <p className="text-yellow-100/70 text-xs mt-1">
                    Available 24/7 for urgent ride issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-20 bottom-1/4 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute -right-20 top-1/4 w-40 h-40 bg-yellow-600/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Contact;
