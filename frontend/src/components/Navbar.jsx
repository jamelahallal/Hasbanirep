import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logos/singlelogo.png";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const isArabic = lang === "AR";

  const text = {
    EN: {
      brand: "HASBANI",
      slogan: "Nature's Taste",
      switchLabel: "عربي",
      links: [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/aboutus" },
        { name: "Products", to: "/products" },
        { name: "Logistics", to: "/logistics" },
      ],
    },
    AR: {
      brand: "HASBANI",
      slogan: "Nature's Taste",
      switchLabel: "EN",
      links: [
        { name: "الصفحة الرئيسية", to: "/" },
        { name: "من نحن", to: "/aboutus" },
        { name: "المنتجات", to: "/products" },
        { name: "الخدمات اللوجستية", to: "/logistics" },
      ],
    },
  };

  const t = isArabic ? text.AR : text.EN;

  const handleToggleLang = () => {
    toggleLang();
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 transition-all duration-300" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo & Brand */}
        <div className={`flex items-center ${isArabic ? "flex-row-reverse" : ""}`}>
          <img src={logo} alt="Hasbani Logo" className="h-20 md:h-24 w-20 object-contain" />
          <div className={`${isArabic ? "text-right mr-2" : "text-left ml-2"}`}>
            <h1 className="mt-2 text-xl font-serif font-bold text-gray-900">{t.brand}</h1>
            <p className="text-gray-500 tracking-widest font-light">{t.slogan}</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center ${isArabic ? "space-x-reverse space-x-10" : "space-x-10"}`}>
          {t.links.map((link, idx) => (
            <Link key={idx} to={link.to} className={`text-gray-800 hover:text-gray-600 ${isArabic ? "text-right" : ""}`}>
              {link.name}
            </Link>
          ))}
          <span onClick={handleToggleLang} className="cursor-pointer font-light text-gray-700 hover:text-gray-500">{t.switchLabel}</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <span onClick={handleToggleLang} className="mr-4 cursor-pointer font-light text-gray-700">{t.switchLabel}</span>
          <button onClick={() => setMenuOpen((s) => !s)} className="text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm" dir={isArabic ? "rtl" : "ltr"}>
          <div className="flex flex-col space-y-3 py-4 px-4">
            {t.links.map((link, idx) => (
              <Link key={idx} onClick={() => setMenuOpen(false)} to={link.to} className="text-gray-800 hover:text-gray-600">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
