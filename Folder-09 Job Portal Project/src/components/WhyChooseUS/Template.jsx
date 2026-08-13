import React from 'react'

const Template = (props) => {
  return (
    <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 hover:bg-indigo-100 hover:shadow-xl transition-all duration-300 text-center">

      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600">
          {props.symbol}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          {props.adv}
        </h3>
      </div>

      <div className="mt-3">
        <p className="text-gray-600 leading-7">
          {props.text}
        </p>
      </div>

    </div>
  )
}

export default Template