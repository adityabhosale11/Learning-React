import React from "react";
import { Star } from "lucide-react";

const Profile = (props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">

      <div className="flex items-center gap-4">
        <img
          src={props.photo}
          alt={props.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h5 className="text-lg font-bold text-gray-900">
            {props.name}
          </h5>

          <p className="text-gray-500 text-sm">
            {props.position}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-gray-600 leading-7 italic">
          "{props.comment}"
        </p>
      </div>

      <div className="flex items-center gap-1 mt-5">
        {Array.from({ length: props.ratings }).map((_, index) => (
          <Star
            key={index}
            className="w-5 h-5 text-orange-500 fill-orange-500"
          />
        ))}
      </div>

    </div>
  );
};

export default Profile;