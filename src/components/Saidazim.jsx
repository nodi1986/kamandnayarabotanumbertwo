import React from 'react'

const Saidazim = () => {
  return (
    <div>
      <header className="flex items-center justify-between p-6 bg-gray-800">
        <nav className="flex space-x-6 text-white">
          <a href="#" className="hover:underline">Контрагентам</a>
          <a href="#" className="hover:underline">Дизайнерам</a>
          <a href="#" className="hover:underline">Вакансии</a>
        </nav>
        <div className="text-2xl font-bold text-white">OJJO</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Поиск"
            className="p-2 text-black rounded"
          />
          <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
            Вход/Регистрация
          </button>
          <button className="p-2 bg-red-600 rounded hover:bg-red-700">
            ❤️
          </button>
        </div>
      </header>


      <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e')",
      }}
    >
      {/* затемнение */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* контент */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-light mb-6">
          Долго, дорого, богато!
        </h1>

        <button className="border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition">
          Каталог изделий
        </button>
      </div>

    </section>

    <footer className="py-6 text-center bg-gray-800">
        <div className="space-y-2">
          <div>Coco Fine Jewelry - Unreal designs by COCO</div>
          <div>Coco Fine Jewelry - Unreal designs by COCO</div>
          <div>Coco Fine Jewelry - Unreal designs by COCO</div>
        </div>
      </footer>
    </div>
  )
}

export default Saidazim