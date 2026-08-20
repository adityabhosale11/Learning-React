import React, { useState } from "react";

const App = () => {
  const [formData, setData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Submitted");
    console.log(formData);
  };

  const changeData = (e) => {
    const newData = { ...formData };

    newData[e.target.name] = e.target.value;

    setData(newData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Job Application Form
        </h2>

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={changeData}
            type="text"
            placeholder="Enter Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            name="email"
            value={formData.email}
            onChange={changeData}
            type="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Phone Number
          </label>

          <input
            name="phone"
            value={formData.phone}
            onChange={changeData}
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Position Applying For
          </label>

          <input
            name="position"
            value={formData.position}
            onChange={changeData}
            type="text"
            placeholder="Frontend Developer"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Experience
          </label>

          <textarea
            name="experience"
            value={formData.experience}
            onChange={changeData}
            rows="4"
            placeholder="Tell us about your experience..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;