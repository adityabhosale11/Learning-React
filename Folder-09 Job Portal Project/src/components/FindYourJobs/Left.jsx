import React from "react";
import { Rocket, Search } from "lucide-react";

const Left = () => {
  return (
    <div className="w-50% flex items-center">
      <div className="max-w-2xl space-y-8">

        {/* Heading */}
        <div>
  <h2 className="text-6xl font-bold leading-tight text-gray-900">
    Find Your
  </h2>

  <div className="flex items-center gap-3 mt-2">
    <Rocket className="text-indigo-600" size={45} />
    <h2 className="text-6xl font-bold leading-tight text-gray-900">
      Dream Job
    </h2>
  </div>
</div>

        {/* Description */}
        <p className="text-lg text-gray-500 leading-7">
          Find thousands of opportunities from top companies and start your
          next career journey today.
        </p>

        {/* Search Box */}
        <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3">

          <Search className="text-gray-400 mr-3" size={20} />

          <input
            type="text"
            placeholder="Search Jobs..."
            className="flex-1 outline-none text-gray-700"
          />

          <button className="ml-3 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            Search
          </button>

        </div>

        {/* Popular Tags */}
        <div className="flex items-center gap-3 flex-wrap">

          <p className="font-medium text-gray-600">
            Popular:
          </p>

          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300">
            React
          </button>

          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300">
            UI/UX
          </button>

          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 transition duration-300">
            Backend
          </button>

        </div>

      </div>
    </div>
  );
};

export default Left;