
// Icons
import { FaRegCircleDot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Search = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white ring ring-yellow-200 w-[100%] h-[100%] rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center justify-start gap-4 shadow-2xl relative p-2">
          <div className="flex items-center justify-center gap-3 bg-zinc-200 py-2 px-4 rounded-xl ml-0">
            <input
              type="text"
              placeholder="Leaving From"
              className="w-[100%] outline-none transition-all p-1 placeholder:font-semibold"
            />
          </div>
          <div className="flex items-center justify-center gap-3 bg-zinc-200 py-2 px-4 rounded-xl">
            <input
              type="text"
              placeholder="Going To"
              className="w-[100%] outline-none transition-all p-1 placeholder:font-semibold"
            />
          </div>
          <div className="flex items-center justify-center gap-3 bg-zinc-200 py-2 px-4 rounded-xl">
            <FaUsers className="text-zinc-400 size-5" />
            <select
              id="pcount"
              name="pcount"
              className="w-16 px-2 py-1 outline-none"
              required
            >
              <option value="" disabled selected>
                0
              </option>
              <option value="male">1</option>
              <option value="female">2</option>
              <option value="other">3</option>
              <option value="prefer-not-to-say">4</option>
            </select>
          </div>
          <div className="flex items-center justify-center gap-3 bg-zinc-200 py-2 px-4 rounded-xl w-[240px]">
            <MdDateRange className="text-zinc-400 size-5" />
            <input
              type="text"
              placeholder="Select Date & Time"
              onFocus={(e) => (e.target.type = "datetime-local")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
              className=" p-1 outline-none bg-transparent placeholder:font-semibold ml-2"
            />
          </div>
          <div className=" absolute right-0 bg-yellow-600 w-[90px] h-full rounded-r-xl text-white font-semibold text-lg flex items-center justify-center cursor-pointer group">
            <p className="group-hover:scale-110 transition-all duration-300">
              Search
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;