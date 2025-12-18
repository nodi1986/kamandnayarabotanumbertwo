import React from 'react'

const Aziz = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* NUQTALI FON */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      ></div>

      {/* QORA OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-gray-400 text-sm mb-2">
          Не знаете, что выбрать?
        </p>

        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          Посетите наши салоны в Москве
        </h1>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui tortor
          vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit
          sit pellentesque. Suspendisse donec pretium id dignissim pretiup in dignisim ultrisit egti orse vivero egesstas egestest quit ul.
        </p>

        <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-200 transition">
          НАШИ САЛОНЫ
        </button>
      </div>
    </div>
  )
}

export default Aziz