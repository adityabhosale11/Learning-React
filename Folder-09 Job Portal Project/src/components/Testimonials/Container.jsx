import React from "react";
import { MessageSquareMore } from "lucide-react";
import Profile from "./Profile";

const Container = () => {
 const testimonials = [
  {
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Garrett Graham",
    position: "Frontend Developer",
    comment:
      "Jobify made my job search incredibly easy. Within a few days, I received interview calls from top companies. Highly recommended!",
    ratings: 5,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Johnson",
    position: "UI/UX Designer",
    comment:
      "The platform has a clean interface and great opportunities. I found my dream design role in just two weeks through Jobify.",
    ratings: 5,
  },
];

  return (
    <div className="max-w-7xl mx-auto px-10 py-16">
      <div className="flex items-center gap-3 mb-10">
        <MessageSquareMore className="text-indigo-600" size={32} />
        <h3 className="text-4xl font-bold text-gray-900">
          Testimonials
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((person, idx) => (
          <Profile
            key={idx}
            photo={person.photo}
            name={person.name}
            position={person.position}
            comment={person.comment}
            ratings={person.ratings}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;