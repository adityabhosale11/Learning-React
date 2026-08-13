import React from "react";
import heroImage from "../../assets/Job.png"

const Image = () => {
  return (
    <div className="w-50% flex justify-center items-end">
      <img
  src={heroImage}
  alt="Job Portal Illustration"
  className="w-550px h-auto object-contain"
/>
    </div>
  );
};

export default Image;