import { useState } from "react";
import { navRender } from "../../route/route";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container mx-auto">
      <nav className="w-full">
        <div className="flex items-center justify-between mt-6 px-4 md:flex-col md:justify-center">
          {/* logo */}
          <NavLink
            className="text-white font-heading text-4xl sm:text-6xl lg:text-8xl"
            to=""
          >
            <span>P</span> <span>H</span> <span>O</span> <span>N</span>{" "}
            <span>G</span>
          </NavLink>

          {/* burger */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          <h1 className="hidden md:block text-white font-heading text-3xl mt-4">
            My Portfolio
          </h1>
        </div>

        {/* nav desktop */}
        <div className="hidden md:flex justify-center mt-6">
          <ul className="flex space-x-8">{navRender(closeMenu)}</ul>
        </div>

        {/* nav mobile */}
        <div
          className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white text-3xl hover:rotate-90 transition"
          >
            <span className="text-xl">✕</span>
          </button>

          <ul className="flex flex-col items-center space-y-8 text-2xl text-white">
            {navRender(closeMenu)}
          </ul>
        </div>
      </nav>
    </div>
  );
}
