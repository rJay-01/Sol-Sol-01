import React, { useState, useEffect } from "react";

function Main() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fake API function
  const fetchPhones = async () => {
    setLoading(true);
    const fakeApiResponse = [
      { name: "Oppo A54", desc: "A sleek and affordable phone with powerful performance.", price: "₱8,999", img: "s1.webp" },
      { name: "iPhone 14", desc: "The latest iPhone with advanced camera and display technology.", price: "₱65,000", img: "s2.webp" },
      { name: "Samsung Galaxy S23", desc: "Experience the best of Android with a stunning screen and high-end features.", price: "₱55,000", img: "s3.avif" },
      { name: "Realme 9 Pro", desc: "A smartphone designed for gamers with a large battery and fast performance.", price: "₱15,999", img: "s4.jpg" },
      { name: "Vivo V21", desc: "A phone that blends style and performance with an impressive camera.", price: "₱14,500", img: "s5.webp" },
      { name: "Xiaomi Mi 11", desc: "A flagship phone with a beautiful AMOLED display and powerful chipset.", price: "₱32,000", img: "s6.jpg" },
      { name: "Nokia G50", desc: "A rugged smartphone with 5G connectivity and long-lasting battery life.", price: "₱12,000", img: "s7.jpg" },
      { name: "Samsung A32", desc: "A reliable budget phone with a sharp display and solid performance.", price: "₱13,999", img: "s8.jpg" },
      { name: "Huawei P50", desc: "Elegant design and top-notch cameras for the best photography experience.", price: "₱45,000", img: "s9.jpg" },
    ];
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setPhones(fakeApiResponse);
    setLoading(false);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className="ml-72 m-2 p-11 bg-[#F1F5F9] text-black">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#1E3A8A]">
        Our Phone Selection
      </h2>
      <p className="mb-8 text-center text-lg text-[#374151] italic">
        Discover the latest in mobile technology with our premium selection of phones, designed to offer cutting-edge features and sleek designs to match your lifestyle.
      </p>

      {loading ? (
        <p className="text-center text-xl font-semibold text-[#1E3A8A]">
          Loading phones...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {phones.map((phone, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={phone.img}
                alt={phone.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-medium text-[#1E3A8A] mb-2">
                {phone.name}
              </h3>
              <p className="text-sm text-[#4B5563] mb-3">{phone.desc}</p>
              <p className="text-lg font-bold text-[#1E3A8A]">{phone.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
