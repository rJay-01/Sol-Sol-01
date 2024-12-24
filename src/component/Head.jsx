// src/component/Head.js
import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className="flex justify-between items-center p-2 bg-[#1E3A8A] text-white border-b border-[#1D4ED8] fixed w-full top-0 left-0 z-20">
      <h1 className="text-2xl font-bold">SolGadget</h1>
      <ul className="flex gap-4 list-none">
    <li>
       <Link to="/" className="text-lg hover:text-[#F5F5DC]">Home</Link>
    </li>
      <li>
        <Link to="/contact" className="text-lg hover:text-[#F5F5DC]">Contact</Link>
    </li>
      <li>
       <Link to="/about" className="text-lg hover:text-[#F5F5DC]">About</Link>
      </li>
    </ul>

    </div>
  );
}

export default Head;
