import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl mb-6 text-center">
        {lang === "EN" ? "Oops! Page not found." : "عذرًا! الصفحة غير موجودة."}
      </h2>
      <p className="mb-8 text-center text-gray-600">
        {lang === "EN"
          ? "The page you are looking for might have been removed or never existed."
          : "الصفحة التي تبحث عنها قد تم حذفها أو غير موجودة."}
      </p>
      <Link
        to="/"
        className="bg-[#414A38] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2e3228] transition"
      >
        {lang === "EN" ? "Go Back Home" : "العودة إلى الصفحة الرئيسية"}
      </Link>
    </div>
  );
};

export default NotFound;
