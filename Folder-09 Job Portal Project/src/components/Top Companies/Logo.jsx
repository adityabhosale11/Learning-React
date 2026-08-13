import React from 'react'
import google from "../../assets/google.png";
import apple from "../../assets/apple.jpg";
import netflix from "../../assets/netflix.webp";
import meta from "../../assets/meta.jpg";
import amazon from "../../assets/amazon.jpg";

const Logo = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-10 py-12">

      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src={google}
          alt="Google"
          className="w-28 h-16 object-contain"
        />
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src={apple}
          alt="Apple"
          className="w-28 h-16 object-contain"
        />
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src={netflix}
          alt="Netflix"
          className="w-28 h-16 object-contain"
        />
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src={meta}
          alt="Meta"
          className="w-28 h-16 object-contain"
        />
      </div>

      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
        <img
          src={amazon}
          alt="Amazon"
          className="w-28 h-16 object-contain"
        />
      </div>

    </div>
  )
}

export default Logo