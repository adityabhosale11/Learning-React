import React from 'react'
import Template from './Template'
import {
  ChartNoAxesCombined,
  Zap,
  Globe2,
  CircleDollarSign,
  ChartSpline
} from "lucide-react";

const Main = () => {

  const advantages = [
    {
      symbol: <Zap size={32} />,
      adv: "Fast",
      text: "Discover and apply to top jobs within minutes using our quick and seamless hiring platform."
    },
    {
      symbol: <Globe2 size={32} />,
      adv: "Remote",
      text: "Work from anywhere in the world with thousands of verified remote job opportunities."
    },
    {
      symbol: <CircleDollarSign size={32} />,
      adv: "High Salary",
      text: "Explore premium job openings that offer competitive salaries and attractive employee benefits."
    },
    {
      symbol: <ChartSpline size={32} />,
      adv: "Growth",
      text: "Build your career with companies that provide learning opportunities and long-term growth."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 py-16">

      <div className="flex items-center gap-3 mb-12">
        <ChartNoAxesCombined
          className="text-indigo-600"
          size={32}
        />

        <h3 className="text-4xl font-bold text-gray-900">
          Why Choose Us
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {advantages.map((item, idx) => (
          <Template
            key={idx}
            symbol={item.symbol}
            adv={item.adv}
            text={item.text}
          />
        ))}

      </div>

    </div>
  )
}

export default Main;