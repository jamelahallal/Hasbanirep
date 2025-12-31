// Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import heroImage from "../assets/homePage/hero.jpg";
import product1 from "../assets/products/EXTRAVIRGIN.png";
import product2 from "../assets/products/honey.png";
import product3 from "../assets/products/OLIVES.png";
import feature1 from "../assets/homePage/Check.svg";
import feature2 from "../assets/homePage/Crown.svg";
import feature3 from "../assets/homePage/World.svg";
import farmer from "../assets/homePage/farmer.png";

const FeatureCard = ({ image, title, description, isArabic }) => (
  <div
    className={`flex flex-col items-center bg-white rounded-xl p-6 text-center shadow-md h-full transform transition-transform duration-300 md:hover:scale-105`}
    dir={isArabic ? "rtl" : "ltr"}
  >
    <img src={image} alt={title} className="w-16 h-16 object-contain mb-4" />
    <h3
      className={`text-lg font-semibold text-gray-800 mb-2 ${
        isArabic ? "text-right" : ""
      }`}
    >
      {title}
    </h3>
    <p className={`text-gray-600 text-sm ${isArabic ? "text-right" : ""}`}>
      {description}
    </p>
  </div>
);

const ProductCard = ({ product, isOpen, toggleOpen, isArabic, smallDesc }) => (
  <div
    className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
    onClick={() => toggleOpen(product.id)}
    dir={isArabic ? "rtl" : "ltr"}
  >
    <img
      src={product.image}
      alt={product.title}
      className="w-auto h-56 md:h-64 object-contain transition-transform duration-300 md:group-hover:scale-105"
    />

    {/* Overlay description */}
    <div
      className={`absolute inset-0 bg-[#729072]/70 flex items-center justify-center text-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
      }`}
    >
      <p
        className={`text-white font-semibold ${
          smallDesc ? "text-sm sm:text-[13px]" : "text-base sm:text-[15px]"
        }`}
      >
        {product.description}
      </p>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-serif font-semibold text-gray-800">
        {product.title}
      </h3>
      <p className="md:hidden text-gray-500 text-sm mt-1">
        {isArabic
          ? isOpen
            ? "إخفاء التفاصيل"
            : "اضغط لعرض التفاصيل"
          : isOpen
          ? "Hide details"
          : "Click for details"}
      </p>
    </div>
  </div>
);

export default function Home() {
  const { lang } = useLanguage();
  const isArabic = lang === "AR";
  const [openProduct, setOpenProduct] = useState(null);

  const products = isArabic
    ? [
        {
          id: 1,
          title: "زيت الزيتون البكر الممتاز",
          image: product1,
          description: (
            <>
              <p>
                ليس مجرد زيت زيتون — بل هو طعم تلال حاصبيا، حيث تتناغم الأرض مع
                فصول السنة الأربعة. زيت الزيتون البكر الممتاز HASBANI يتميّز
                بحموضة أقل من 0.8 % — وهو المعيار الذهبي الذي يحدد جودة البكر
                الممتاز الحقيقي.
              </p>
              <p>
                يتمتع بنكهة سلسة، غنية وقوية، مثالي للسلطات، الصلصات، أو
                للتزيين، مع فوائد صحية طبيعية.
              </p>
              <p>
                الأحجام المتوفّرة: 250 مل، 500 مل، 1 لتر، 5 لتر، 16 لتر، أو حسب
                الطلب
              </p>
            </>
          ),
        },
        {
          id: 2,
          title: "عسل طبيعي",
          image: product2,
          description: (
            <>
              <p>
                عسل HASBANI طبيعي خام يجسّد صفاء الطبيعة المتوسطيّة بطعمه الأصيل
                وغناه بالعناصر الحيوية ومضادات الأكسدة التي تعزز المناعة وتمنح
                طاقة طبيعية نقية.
              </p>
              <p>
                بفضل قوامه الذهبي وطابعه الفاخر، يُضفي لمسة من التميّز على
                المشروبات الساخنة، الشاي، المخبوزات، الصلصات، والحلويات، كما
                يمكن الاستمتاع به يوميا ضمن أسلوب حياة صحي ومتوازن.
              </p>
              <p>
                يتوفر بنكهات راقية مستوحاة من الطبيعة اللبنانية مثل الشوكيات،
                زهر الليمون، البلوط، الخزامى، والشنديب وغيرها.
              </p>
            </>
          ),
        },
        {
          id: 3,
          title: "زيتون",
          image: product3,
          description: (
            <>
              <p>
                زيتون HASBANI غني بمضادات الأكسدة والدهون الصحية، يدعم صحة القلب
                ويقلل الالتهابات. مثالي كوجبة خفيفة، في السلطات، أو ضمن أطباق
                البحر الأبيض المتوسط.
              </p>
            </>
          ),
        },
      ]
    : [
        {
          id: 1,
          title: "Extra Virgin Olive Oil",
          image: product1,
          description: (
            <>
              <p>
                This isn’t just olive oil — it’s the taste of Hasbaya’s hills,
                where the land is shaped by all four seasons. Our extra virgin
                olive oil proudly hits below 0.8% acidity — the gold standard
                that sets true extra virgin apart.
              </p>
              <p>
                It delivers a flavor that’s smooth, rich, and bold. It’s perfect
                for salads, dressings, or drizzling, packed with natural taste
                and health benefits.
              </p>
              <p>
                Available in <b>250ml, 500ml, 1L, 5L, 16L</b>, or custom sizes
                on request.
              </p>
            </>
          ),
        },
        {
          id: 2,
          title: "Honey",
          image: product2,
          description: (
            <>
              <p>
                Raw and pure from the cleanest beehives, HASBANI honey is rich
                in antioxidants, enzymes, and nutrients that boost immunity and
                support overall health.
              </p>
              <p>
                Perfect for active lifestyles — use it pre- or post-workout, in
                shakes, tea, toast, dressings, or desserts.
              </p>
              <p>
                Choose from a variety of flavors like{" "}
                <b>thistle, lemon blossom, oak, lavender, Shandib, and more.</b>
              </p>
            </>
          ),
        },
        {
          id: 3,
          title: "Olives",
          image: product3,
          description: (
            <>
              <p>
                Rich in antioxidants and healthy fats, our olives support heart
                health and reduce inflammation. Perfect as a snack, in salads,
                or as part of Mediterranean dishes.
              </p>
            </>
          ),
        },
      ];

  const features = isArabic
    ? [
        {
          image: feature1,
          title: "النكهة الأصيلة لحاصبيا",
          description: "وصفات تقليدية تحمل التراث اللبناني الغني.",
        },
        {
          image: feature2,
          title: "مكونات عالية الجودة",
          description:
            "اختيار دقيق للزيتون والفواكه والخضروات للحصول على أفضل طعم.",
        },
        {
          image: feature3,
          title: "ثقة حول العالم",
          description:
            "أكثر من 40 عامًا من الجودة الموثوقة والنكهة الأصيلة من لبنان.",
        },
      ]
    : [
        {
          image: feature1,
          title: "Authentic Taste of Hasbaya",
          description:
            "Traditional recipes that carry the rich Lebanese heritage.",
        },
        {
          image: feature2,
          title: "Premium Ingredients",
          description:
            "Carefully selected olives, fruits, and vegetables for the best flavor.",
        },
        {
          image: feature3,
          title: "Trusted Worldwide",
          description:
            "Over 40 years of trusted quality and authentic flavor from Lebanon.",
        },
      ];

  const toggleProduct = (id) =>
    setOpenProduct((prev) => (prev === id ? null : id));

  return (
    <div
      className="pt-20 relative w-auto bg-[#d5ded5]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <div className="relative w-auto">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0"></div>

        <div className="absolute top-8 md:top-8 left-[10px] md:left-8 max-w-md md:max-w-xl lg:max-w-2xl px-4">
          {/* Title */}
          <h1
            className="font-serif text-white mb-6 leading-tight
                   text-2xl sm:text-3xl md:text-6xl lg:text-7xl"
          >
            <span className="block">{isArabic ? "نكهات" : "Exquisite"}</span>

            <span className="block">{isArabic ? "لبنانية" : "Lebanese"}</span>

            <span className="block">{isArabic ? "راقية" : "Flavors"}</span>
          </h1>
          <Link
            to="/products"
            className="mt-[2px] px-[10px] py-[6px]
             sm:px-[32px] sm:py-[12px]
             rounded-full font-semibold shadow-md
             transform transition-all duration-300 inline-block
             text-white bg-[#414A38] hover:bg-green-900 hover:scale-105
             text-[9px] sm:text-base"
          >
            {isArabic ? "تذوق الأصالة" : "Taste the Heritage"}
          </Link>
        </div>
      </div>

      {/* Our Story Section */}
      <section
        className={`flex flex-col md:flex-row w-auto mt-1`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="md:flex-1 bg-[#414A38] text-white p-8 md:p-16 flex flex-col justify-between shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            {isArabic ? "قصتنا" : "Our Story"}
          </h2>

          <div className="space-y-4 text-sm md:text-base leading-relaxed flex-1 text-gray-100">
            {isArabic ? (
              <>
                <p>
                  تقع بلدة حاصبيا بين جبال لبنان الخضراء في الجنوب، حيث يبطؤ
                  الزمن وتبقى الطبيعة هي التي ترسم ملامح الحياة.
                </p>
                <p>
                  هذه البلدة التاريخية الممتدة على ضفاف نهر الحاصباني، تشتهر
                  بجمال مناظرها الطبيعية وخصوبة أراضيها وغنى تراثها المتجذر في
                  العادات والتقاليد عبر الأجيال.
                </p>
                <p>
                  منذ القدم عاش أهل حاصبيا في انسجام تام مع الأرض، يزرعون
                  الزيتون العتيق والبساتين المثمرة والأعشاب الطبيعية والمنتجات
                  التي تغذي العائلات منذ مئات السنين.
                </p>
                <p>
                  تنبض هذه الأرض بالحياة تحت شمسها الدافئة ومياهها النقية،
                  وتحتضن روح الأصالة والنقاء التي تعكس تاريخها العريق.
                </p>
                <p>
                  في هذا الركن الريفي من لبنان، لا يُعد موسم الحصاد مجرد وقت من
                  السنة، بل أسلوب حياة يعكس القيم — الصبر، والإخلاص، والاحترام
                  للطبيعة — وهي القيم التي تتجلى في كل ما نقوم به.
                </p>
                <p>
                  ومن خلال منتجات <b>حاصباني</b>، نواصل هذا الإرث من الأصالة
                  والنقاء والعناية، ونشارك العالم قصة أرضٍ تنبض بالحياة.
                </p>
              </>
            ) : (
              <>
                <p>
                  Nestled in the green mountains of South Lebanon, the town of
                  Hasbaya is a place where time slows down and nature still
                  shapes the lives of the people.
                </p>
                <p>
                  This historic town, stretched along the banks of the Hasbani
                  River, is known for its natural beauty, fertile lands, and
                  deep-rooted traditions passed down through generations.
                </p>
                <p>
                  For centuries, the people of Hasbaya have lived in harmony
                  with the land, cultivating ancient olive trees, fruit
                  orchards, and natural herbs that have nourished families for
                  hundreds of years.
                </p>
                <p>
                  The land itself breathes life — under its warm sun and clear
                  waters, it carries the soul of purity and authenticity.
                </p>
                <p>
                  In this rural corner of Lebanon, harvest season isn’t just a
                  time of year; it’s a way of life — reflecting values of
                  patience, devotion, and respect for nature that shine through
                  in everything we do.
                </p>
                <p>
                  Through <b>HASBANI</b>, we carry forward this heritage of
                  tradition, purity, and care, and share with the world the
                  story of a land that beats with life.
                </p>
              </>
            )}
          </div>

          <Link
            to="/aboutus"
            className="mt-6 inline-block bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 text-center"
          >
            {isArabic ? "اعرف المزيد عنا" : "Learn More About Us"}
          </Link>
        </div>

        <div className="md:flex-1 h-auto">
          <img
            src={farmer}
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bg-[#d5ded5] py-16 px-4 md:px-8 w-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 w-auto">
          <h2
            className={`text-3xl font-serif text-gray-800 mb-8 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {isArabic ? "الأكثر مبيعًا" : "Bestsellers"}
          </h2>
          <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                isOpen={openProduct === product.id}
                toggleOpen={toggleProduct}
                isArabic={isArabic}
                smallDesc={index < 2} // first 2 cards only
              />
            ))}
          </div>
        </div>
      </section>

      {/* Colored Info Bar */}
      <div className="bg-[#414A38] py-4 mt-8 w-auto">
        <div
          className="flex flex-wrap justify-center md:justify-between items-center px-4 md:px-8 text-center gap-y-2"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {(isArabic
            ? ["عضوي", "تقليدي", "نقي", "التراث اللبناني", "معايير ISO"]
            : [
                "Organic",
                "Traditional",
                "Pure",
                "Lebanese Heritage",
                "ISO Standards",
              ]
          ).map((item, idx) => (
            <span
              key={idx}
              className="text-white font-semibold text-sm md:text-base mx-2 drop-shadow-[0_0_2px_#ffffff] md:drop-shadow-[0_0_3px_#729072]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* What Makes Us Better Section */}
      <section className="bg-[#d5ded5] py-16 px-4 md:px-8 w-auto">
        <h2
          className={`text-3xl font-serif font-semibold text-gray-800 mb-8 max-w-screen-xl mx-auto ${
            isArabic ? "text-right" : "text-center md:text-left"
          }`}
        >
          {isArabic ? "لماذا نحن الأفضل؟" : "What Makes Us Better"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto mb-8 overflow-x-auto md:overflow-x-visible">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} isArabic={isArabic} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/aboutus"
            className="bg-[#414A38] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2f362b] transition-colors"
          >
            {isArabic ? "اكتشف سبب تميزنا" : "Discover Why We Are Different"}
          </Link>
        </div>
      </section>
    </div>
  );
}
