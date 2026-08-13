import React from 'react'
import Logo from './Logo'
import { BriefcaseBusiness } from "lucide-react";

const Company = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 py-16">

      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-3">
          <BriefcaseBusiness
            className="text-indigo-600"
            size={32}
          />

          <h3 className="text-4xl font-bold text-gray-900">
            Top Companies
          </h3>
        </div>

        <p className="text-indigo-600 font-semibold cursor-pointer hover:underline">
          View All Companies →
        </p>

      </div>

      <Logo />

    </div>
  )
}

export default Company