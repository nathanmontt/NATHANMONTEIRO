import { useState } from 'react'
import { menuItems } from '../../../data/menuItems'

function MenuItems({ onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (e, itemId) => {
    onMenuClick(e, itemId)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Menu */}
      <div class="hidden md:flex items-center gap-4 px-6 py-3 rounded-lg backdrop-blur-lg bg-black/40 border border-gray-700/50 shadow-xl">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={(e) => handleClick(e, item.id)}
            class="text-(--text-color) text-xs font-(family-name:--main-font) hover:font-bold transition-all duration-200 cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu */}
      <div class="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          class="pr-6 pl-6 pt-2 pb-2 rounded-lg backdrop-blur-lg bg-black/40 border border-gray-700/50 text-(--text-color) font-(family-name:--main-font) text-xs transition-all duration-500 hover:bg-black/60 cursor-pointer"
        >
          MENU
        </button>

        <div
          class={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div class="flex flex-col gap-2 p-4 rounded-lg backdrop-blur-lg bg-black/40 border border-gray-700/50 shadow-xl min-w-28">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => handleClick(e, item.id)}
                class="text-(--text-color) text-xs font-(family-name:--main-font) hover:text-white duration-200 text-center py-2 px-3 rounded hover:font-bold transition-all cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div
            class="fixed inset-0 -z-10"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </>
  )
}

export default MenuItems