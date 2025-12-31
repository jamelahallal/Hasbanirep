import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Logo from "../assets/Logos/singlelogo.png";
import WhatsLogo from "../assets/Logos/whatsLogo.png";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  const isArabic = lang === "AR";

  const text = {
    EN: {
      brand: "HASBANI",
      slogan: "Nature’s Taste",
      quote: "From the heart of Hasbaya to the world — nature’s purity, shared with care.",
      navigation: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/aboutus" },
        { name: "Our Products", href: "/products" },
        { name: "Logistics", href: "/logistics" },
      ],
      address: "Address",
      location: "Hasbaya, South Lebanon",
      postal: "Main Street, Postal Code: 1704",
      follow: "Follow Us",
      social: [
        { icon: <FaFacebook />, href: "https://www.facebook.com/share/14Lse2WwsEg/?mibextid=wwXIfr", label: "Facebook" },
        { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
        { icon: <FaInstagram />, href: "https://www.instagram.com/hasbani_natures_taste", label: "Instagram" },
      ],
      contact: "Get in Touch",
      email: "info@hasbani-lb.com",
      phone: "+961 81 484 753",
      rights: `© ${new Date().getFullYear()} Hasbani Nature’s Taste — All Rights Reserved`,
    },
    AR: {
      brand: "HASBANI",
      slogan: "Nature's Taste",
      quote: "من قلب حاصبيا إلى العالم — نقاء الطبيعة نشاركه بكل حب.",
      navigation: "التنقل",
      links: [
        { name: "الصفحة الرئيسية", href: "/" },
        { name: "من نحن", href: "/aboutus" },
        { name: "منتجاتنا", href: "/products" },
        { name: "الخدمات اللوجستية", href: "/logistics" },
      ],
      address: "العنوان",
      location: "حاصبيا، جنوب لبنان",
      postal: "الشارع الرئيسي، الرمز البريدي: ١٧٠٤",
      follow: "تابعنا",
      social: [
        { icon: <FaFacebook />, href: "https://www.facebook.com/share/14Lse2WwsEg/?mibextid=wwXIfr", label: "Facebook" },
        { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
        { icon: <FaInstagram />, href: "https://www.instagram.com/hasbani_natures_taste", label: "Instagram" },
      ],
      contact: "تواصل معنا",
      email: "info@hasbani-lb.com",
      phone: "+961 81 484 753",
      rights: `© ${new Date().getFullYear()} HASBANI Nature's Taste — جميع الحقوق محفوظة`,
    },
  };

  const t = isArabic ? text.AR : text.EN;

  return (
    <footer
      className={`relative bg-[#414A38] text-[#DDE3C1] py-6 px-6 md:px-20 overflow-hidden ${isArabic ? "text-right" : "text-left"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,230,180,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="relative flex flex-col md:flex-row md:items-start gap-8 z-10">
        {/* Logo & Quote */}
        <div className="flex flex-col items-center md:flex-2 mb-4">
          <img src={Logo} alt="Hasbani Logo" className="h-16 md:h-20 lg:h-24 w-auto drop-shadow-[0_0_20px_rgba(200,230,180,0.5)]" />
          <h2 className="text-l md:text-xl tracking-widest lg:text-xl font-bold font-serif text-[#DDE3C1] drop-shadow-lg mt-2">{t.brand}</h2>
          <span className="text-xs italic tracking-widest text-[#BFD18B]">{t.slogan}</span>
          <p className="text-sm italic leading-relaxed max-w-xs text-[#CFE3A8] mt-2 text-center">{t.quote}</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-1">
          <h3 className="text-lg mb-4 font-serif font-semibold text-[#BFD18B] tracking-widest border-b border-[#BFD18B]/30 pb-1">{t.navigation}</h3>
          {t.links.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-[#DDE3C1] transition-colors mb-1">{link.name}</a>
          ))}
        </div>

        {/* Address */}
        <div className="flex flex-col md:flex-1">
          <h3 className="text-lg mb-4 font-serif font-semibold text-[#BFD18B] tracking-wide border-b border-[#BFD18B]/30 pb-1">{t.address}</h3>
          <p className="text-[#CFE3A8]">{t.location}</p>
          <p className="text-[#CFE3A8]">{t.postal}</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-1">
          <h3 className="text-lg mb-4 font-serif font-semibold text-[#BFD18B] tracking-wide border-b border-[#BFD18B]/30 pb-1">{t.follow}</h3>
          <div className={`flex ${isArabic ? "flex-row-reverse justify-end" : "justify-start"} gap-4 text-2xl`}>
            {t.social.map((s, idx) => (
              <a key={idx} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#DDE3C1] transition-colors" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-1 relative">
          <h3 className="text-lg mb-4 font-primary font-semibold text-[#BFD18B] tracking-wide border-b border-[#BFD18B]/30 pb-1">{t.contact}</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <FaEnvelope className={`${isArabic ? "ml-2" : "mr-2"} text-[#DDE3C1]`} />
              <a href={`mailto:${t.email}`} className="hover:underline text-[#CFE3A8]">{t.email}</a>
            </div>
            <div className="flex items-center">
              <FaPhone className={`${isArabic ? "ml-2" : "mr-2"} text-[#DDE3C1]`} />
              <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="hover:underline text-[#CFE3A8]" dir="ltr">{t.phone}</a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className={`absolute top-16 sm:top-20 ${isArabic ? "left-0" : "right-0"} z-20`}>
            <a href="https://wa.me/96181484753" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="hover:scale-110 transition-transform duration-300">
              <img src={WhatsLogo} alt="WhatsApp" className="w-12 h-12 rounded-full bg-[#CFE3A8] shadow-lg p-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative mt-4 pt-2 border-t border-[#BFD18B]/20 text-center text-sm text-[#CFE3A8] tracking-wide z-10">
        {t.rights}
      </div>
    </footer>
  );
};

export default Footer;
