import { useState } from "react";
import Image from "next/image";
import { Menu, Home, MenuIcon } from "lucide-react";
import { CloseIcon } from "../icons/CloseIcon";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleUnitsClick = () => closeMenu();

  return (
    <>
      <header className="relative bg-black lg:hidden block">
        <nav className="flex flex-row justify-between items-center px-4 py-2 gap-2 absolute w-full mx-auto top-0 bg-black">
          <button
            onClick={toggleMenu}
            className="w-6 h-6 relative "
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-6 h-6 text-white" />
          </button>

          <div className="flex-none order-1 flex-grow-0 w-100.91 h-20 relative mx-auto">
            <Image
              src="/logo.svg"
              alt="sakneen"
              width={100.91}
              height={20}
              className="w-100.91 h-20"
            />
          </div>

          <div className="flex flex-row items-center p-0 gap-19.2 isolate flex-none order-2 flex-grow-0 w-8 h-8 relative ">
            <Image
              src="/user.svg"
              alt="Profile"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Menu className="text-white" size={20} />
            <h2 className="text-white text-xl font-semibold">Menu</h2>
          </div>
          <button
            onClick={closeMenu}
            className="text-white hover:text-gray-300 p-1 rounded-full hover:bg-gray-800 transition-colors duration-200"
            aria-label="Close menu"
          >
            <CloseIcon className="w-3 h-3 text-white" />
          </button>
        </div>

        <div className="p-4">
          <nav>
            <ul className="space-y-4">
              <li>
                <button
                  className="w-full text-left text-white bg-gray-800 hover:text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center gap-3 group"
                  onClick={handleUnitsClick}
                >
                  <Home
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-medium">Units</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
