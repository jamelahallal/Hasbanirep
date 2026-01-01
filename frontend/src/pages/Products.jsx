import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import axios from "axios";
import heroImage from "../assets/ProductsPage/products.png";
import productspage from "../assets/ProductsPage/productspage.png";

const Products = () => {
  const { lang } = useLanguage();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://hasbaniwebproject-production.up.railway.app/products/${lang.toLowerCase()}`
        );

        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [lang]);

  return (
    <div
      className={`pt-20 pb-20 min-h-screen bg-[#FAF8F5] bg-[url('/src/assets/bgleaves.svg')] bg-repeat-y bg-auto ${
        lang === "AR" ? "text-right" : "text-left"
      }`}
      dir={lang === "AR" ? "rtl" : "ltr"}
    >
      {/* Hero Image */}
      <div className="relative w-full">
        <img
          src={productspage}
          alt="Hero"
          className="block md:hidden w-auto object-contain h-auto max-h-[80vh] mx-auto"
        />
        <img
          src={heroImage}
          alt="Hero"
          className="hidden md:block w-auto object-contain h-auto max-h-[80vh] mx-auto"
        />
      </div>

      {/* Products Container */}
      <div className="w-full max-w-6xl mx-auto px-4 mt-12 mb-20 space-y-12">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-[#E7EDE9] rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
          >
            {/* Product Name */}
            <div
              className={`order-2 md:order-1 relative z-10 mb-4 md:mb-0 ${
                lang === "EN" ? "text-left md:w-1/3" : "text-center md:w-1/3"
              }`}
              dir={lang === "EN" ? "ltr" : "rtl"}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
                {lang === "EN" ? prod.enName : prod.arName}
              </h2>
            </div>

            {/* Product Image */}
            <div className="order-1 md:order-2 flex justify-center md:w-1/3 relative z-10 mb-4 md:mb-0">
              {prod.image ? (
                <img
                  src={`http://localhost:5000/uploads/${prod.image}`}
                  alt={prod.name}
                  className="max-w-full w-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="bg-gray-200 w-32 h-32 flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="order-3 md:order-3 text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-base md:w-1/3 relative z-10">
              <p> {lang === "EN" ? prod.enDescription : prod.arDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
