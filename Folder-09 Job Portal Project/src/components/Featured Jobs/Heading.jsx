import React from 'react'
import { Flame } from "lucide-react";
import Card from './Card';

import google from "../../assets/google.png";
import meta from "../../assets/meta.jpg";
import netflix from "../../assets/netflix.webp";

const Heading = () => {

  const jobOpenings = [
    {
      logo: google,
      time: "2 Days Ago",
      position: "Frontend Developer",
      company: "Google",
      location: "Bangalore, India",
      salary: "$70,000 - $90,000",
      skill1: "React",
      skill2: "JavaScript",
    },
    {
      logo: meta,
      time: "5 Days Ago",
      position: "UI/UX Designer",
      company: "Meta",
      location: "Remote",
      salary: "$60,000 - $80,000",
      skill1: "Figma",
      skill2: "UI/UX",
    },
    {
      logo: netflix,
      time: "1 Week Ago",
      position: "Backend Developer",
      company: "Netflix",
      location: "Los Gatos, USA",
      salary: "$80,000 - $110,000",
      skill1: "Node.js",
      skill2: "MongoDB",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 py-16">

      <div className="flex items-center justify-between mb-10">

        <div className="flex items-center gap-3">
          <Flame className="text-indigo-600" size={32} />
          <h3 className="text-4xl font-bold text-gray-900">
            Featured Jobs
          </h3>
        </div>

        <p className="text-indigo-600 font-semibold cursor-pointer hover:underline">
          View All Jobs →
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {jobOpenings.map((job, idx) => (
          <Card
            key={idx}
            logo={job.logo}
            time={job.time}
            position={job.position}
            company={job.company}
            location={job.location}
            salary={job.salary}
            skill1={job.skill1}
            skill2={job.skill2}
          />
        ))}

      </div>

    </div>
  )
}

export default Heading