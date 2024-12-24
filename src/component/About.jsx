import React from "react";

function About() {
  return (
    <div className="ml-center m-5 p-20 bg-[#F9FAFB] text-black">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-[#1E3A8A]">
        About Us
      </h2>
      <p className="mb-6 text-lg text-center text-[#374151]">
        Welcome to <span className="font-semibold">SolGadget</span>, your trusted partner in exploring the world of smartphones. We’re here to provide you with the most advanced, reliable, and affordable devices to suit your lifestyle and needs.
      </p>
      <h3 className="text-2xl font-semibold mb-4 text-center text-[#1E3A8A]">
        Our Vision
      </h3>
      <p className="mb-6 text-[#374151]">
        At SolGadget, we believe in empowering our customers by offering them access to the latest mobile technology. Our aim is to bridge the gap between innovation and accessibility, ensuring that everyone can experience the best of what modern smartphones have to offer.
      </p>
      <h3 className="text-2xl font-semibold mb-4 text-center text-[#1E3A8A]">
        Why Choose SolGadget?
      </h3>
      <ul className="list-disc pl-10 text-[#4B5563] mb-6">
        <li className="mb-2">
          <span className="font-semibold">Unparalleled Selection:</span> From flagship models to budget-friendly devices, we offer a wide variety of smartphones tailored to every user.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Trusted Quality:</span> Each product in our collection is thoroughly tested to meet the highest standards of performance and reliability.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Customer Satisfaction:</span> Your happiness is our priority. We provide comprehensive support to ensure a smooth and enjoyable shopping experience.
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mb-4 text-center text-[#1E3A8A]">
        Join Us Today
      </h3>
      <p className="text-center text-[#374151]">
        Discover the phone that fits your lifestyle and needs. Let <span className="font-semibold">SolGadget</span> be your guide to the future of mobile technology.
      </p>
    </div>
  );
}

export default About;
