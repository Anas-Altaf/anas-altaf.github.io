import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  let services = ["Web Development", "API Development", "Automation"];
  let support = ["Blogs", "Open Source", "Tutorials"];
  return (
    <footer className="bg-fg-p text-white py-10 pt-5 px-6">
      <p className="text-xl text-center pb-15">
        👋 Thanks for stopping by! Hope this visit was inspiring
      </p>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Anas Altaf</h1>
          <p className="mt-2 text-txt-desc text-sm">
            Passionate developer specializing in web development, Scripting, AI
            and Automation.
          </p>
          <p className="mt-4 text-txt-desc text-sm">
            &copy; <span>{year}</span> All Rights Reserved.
          </p>
        </div>

        {/* Services & Support Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className=" ">Services</p>
            <ul className="mt-2 space-y-1 text-txt-desc text-sm">
              {services.map((item, index) => (
                <li className="hover:text-white text-sm" key={index}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className=" ">Support</p>
            <ul className="mt-2 space-y-1 text-txt-desc text-sm">
              {support.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
