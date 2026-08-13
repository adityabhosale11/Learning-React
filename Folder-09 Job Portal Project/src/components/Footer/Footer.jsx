import React from "react";
import {
  Mail,
  Globe,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-24">
      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-indigo-600">
              Jobify
            </h2>

            <p className="text-gray-500 mt-5 leading-7">
              Find your dream job with thousands of opportunities around the
              world.
            </p>

            <div className="flex gap-4 mt-6">

              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-indigo-600 hover:text-white transition cursor-pointer">
                <Mail size={18} />
              </div>

              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-indigo-600 hover:text-white transition cursor-pointer">
                <Globe size={18} />
              </div>

              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-indigo-600 hover:text-white transition cursor-pointer">
                <Users size={18} />
              </div>

              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-indigo-600 hover:text-white transition cursor-pointer">
                <BriefcaseBusiness size={18} />
              </div>

            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-indigo-600 cursor-pointer">About Us</li>
              <li className="hover:text-indigo-600 cursor-pointer">Careers</li>
              <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-indigo-600 cursor-pointer">Job Search</li>
              <li className="hover:text-indigo-600 cursor-pointer">Resume Tips</li>
              <li className="hover:text-indigo-600 cursor-pointer">Interview Tips</li>
              <li className="hover:text-indigo-600 cursor-pointer">Salary Guide</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">
              Support
            </h3>

            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-indigo-600 cursor-pointer">Help Center</li>
              <li className="hover:text-indigo-600 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-indigo-600 cursor-pointer">Terms of Service</li>
              <li className="hover:text-indigo-600 cursor-pointer">FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">
              Subscribe
            </h3>

            <p className="text-gray-500 mb-5">
              Get the latest job updates directly in your inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 outline-none focus:border-indigo-600"
              />

              <button className="bg-indigo-600 text-white px-5 rounded-r-lg hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <hr className="my-12" />

        <p className="text-center text-gray-500">
          © 2026 Jobify. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;