const Contact = () => {
  return (
    <>
      <section id="contact" className="container mx-auto">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 px-4">
          <div className="w-full py-6 text-3xl font-bold flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-white">
            Contact Us
          </div>
          <div className="w-full h-full flex">
            <div className="p-6 w-full lg:w-[70%]">
              <form
                action=""
                className="bg-white p-6 rounded-xl w-full max-w-4xl mx-auto shadow-md"
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name:
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email:
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Your Email ID"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="designation"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Designation:
                    </label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      placeholder="Enter Your Designation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="gender"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Gender:
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
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
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    placeholder="Enter your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-vertical"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-all transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block p-6 w-[30%]">
              <div className="bg-red-600 h-full p-6 flex items-center justify-center">cartoon</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
