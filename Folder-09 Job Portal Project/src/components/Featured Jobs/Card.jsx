import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">
      <div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src={props.logo}
              alt={props.company}
              className="w-12 h-12 object-contain"
            />

            <button className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
              {props.time}
            </button>
          </div>

          <Bookmark
            size={22}
            className="text-gray-400 cursor-pointer hover:text-indigo-600"
          />

        </div>

        <div className="mt-6 space-y-2">

          <h3 className="text-2xl font-bold text-gray-900">
            {props.position}
          </h3>

          <p className="text-gray-600 font-medium">
            {props.company}
          </p>

          <p className="text-gray-500">
            📍 {props.location}
          </p>

          <p className="text-lg font-semibold text-gray-900">
            {props.salary}
          </p>

        </div>

        <div className="flex gap-3 mt-6">

          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition">
            {props.skill1}
          </button>

          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition">
            {props.skill2}
          </button>

        </div>

      </div>
    </div>
  )
}

export default Card