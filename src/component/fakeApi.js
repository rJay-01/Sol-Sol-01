// fakeApi.js
export const fakeApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Oppo A54", desc: "A sleek and affordable phone with powerful performance.", price: "₱8,999", img: "s1.webp" },
          { name: "iPhone 14", desc: "The latest iPhone with advanced camera and display technology.", price: "₱65,000", img: "s2.webp" },
          { name: "Samsung Galaxy S23", desc: "Experience the best of Android with a stunning screen and high-end features.", price: "₱55,000", img: "s3.avif" },
          { name: "Realme 9 Pro", desc: "A smartphone designed for gamers with a large battery and fast performance.", price: "₱15,999", img: "s4.jpg" },
          { name: "Vivo V21", desc: "A phone that blends style and performance with an impressive camera.", price: "₱14,500", img: "s5.webp" },
          { name: "Xiaomi Mi 11", desc: "A flagship phone with a beautiful AMOLED display and powerful chipset.", price: "₱32,000", img: "s6.jpg" },
          { name: "Nokia G50", desc: "A rugged smartphone with 5G connectivity and long-lasting battery life.", price: "₱12,000", img: "s7.jpg" },
          { name: "Samsung A32", desc: "A reliable budget phone with a sharp display and solid performance.", price: "₱13,999", img: "s8.jpg" },
          { name: "Huawei P50", desc: "Elegant design and top-notch cameras for the best photography experience.", price: "₱45,000", img: "s9.jpg" },
        ]);
      }, 1000); // Simulate a 1-second delay
    });
  };
  