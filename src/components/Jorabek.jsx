import React, { useState } from "react";

const tabs = ["СВАДЬБА", "МУЖУ", "ЖЕНЕ", "ПАРТНЕРУ", "КОЛЛЕКЦИИ", "РЕДКОСТЬ"];

const cards = [
  { title: "КОЛЬЦА", img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a" },
  { title: "СЕРЬГИ", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" },
  { title: "ПОДВЕСКИ", img: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb" },
  { title: "ЗАПОНКИ", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
  { title: "БРАСЛЕТЫ", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { title: "ЧАСЫ", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" }
];

export default function App() {
  const [active, setActive] = useState("СВАДЬБА");

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <p className="text-center text-gray-400 mb-2">К мероприятиям</p>
      <h1 className="text-center text-3xl font-semibold mb-8">Настоящая красота здесь!</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 border text-sm transition ${
              active === tab
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <h2 className="text-white text-lg font-medium p-5">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
