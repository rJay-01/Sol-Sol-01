function Aside() {
  return (
    <div className="bg-[#F0F4F8] w-55 h-screen p-6 border-r border-[#1E3A8A] fixed top-10 left-0 z-10 overflow-y-auto">
      <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">Categories</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Brands</h3>
        <ul className="space-y-1 pl-2">
          {['Oppo', 'Vivo', 'iPhone', 'Samsung', 'LG', 'Cherry Mobile', 'Realme', 'Xiaomi', 'Itel', 'Asus', 'Infinix', 'Nokia', 'Lenovo'].map((brand, index) => (
            <li key={index}>
              <a href="#" className="text-[#374151] hover:text-[#1E3A8A] transition-colors duration-150">
                {brand}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Accessories</h3>
        <ul className="space-y-1 pl-2">
          {['Headphone', 'Phonecase', 'Charger', 'Speaker', 'Tempered Glass', 'Earphone', 'Airbuds', 'Microphone'].map((accessory, index) => (
            <li key={index}>
              <a href="#" className="text-[#374151] hover:text-[#1E3A8A] transition-colors duration-150">
                {accessory}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Aside;
