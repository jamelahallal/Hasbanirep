import React from "react";
import heroVideo from "../assets/logistics/vdspreadofolive.mp4";
import { FaHandshake, FaTruck, FaFileContract, FaUsers } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Logistics() {
  const { lang } = useLanguage();

  return (
    <div
      className={`pt-28 pb-28 bg-gray-100 w-auto h-auto ${
        lang === "AR" ? "text-right" : "text-left"
      }`}
    >
      {/* Hero Section */}
      <div className="relative w-full flex justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 max-w-5xl w-[85%]">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            className="w-[70%] md:w-[80%] object-contain mx-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Market Presence Section */}
      <div className="bg-gray-100 py-16 px-4 md:px-12 lg:px-24 flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 w-full md:w-4/5">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-800">
            {lang === "EN"
              ? "Market Presence & Export Countries"
              : "تواجدنا في الأسواق العالمية"}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {lang === "EN" ? (
              "For over a decade, HASBANI products ..."
            ) : (
              <>
                على مدى أكثر من عقد من الزمن، وصلت منتجاتنا إلى أسواق كثيرة حول
                العالم، مدعومًا بشراكات قوية وطلب دولي متزايد، واكتسبت الثقة
                بسبب جودتها وطعمها المتميز حتى قبل أن تحمل اسم{" "}
                <span dir="ltr">HASBANI</span> رسميًا
              </>
            )}
          </p>
        </div>
      </div>

      {/* Work With Us Section */}
      <section
        className="bg-[#414A38] text-[#DDE3C1] py-20 px-6 md:px-16"
        dir={lang === "AR" ? "rtl" : "ltr"}
      >
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-serif font-semibold mb-4 ${
              lang === "AR" ? "text-right" : "text-left"
            }`}
          >
            {lang === "EN" ? "Work With Us" : "تشارك معنا"}
          </h2>
          <p
            className={`text-sm md:text-base leading-relaxed ${
              lang === "AR" ? "text-right" : "text-left"
            }`}
          >
            {lang === "EN"
              ? "Hasbani offers a flexible, export-ready business model designed to serve partners locally and internationally. We combine high-quality Mediterranean products with reliable logistics to ensure a smooth journey from our groves to your shelves."
              : `توفر HASBANI نموذج أعمال مرن جاهز للتصدير، يلبي احتياجات الشركاء محليًا ودوليًا. نجمع بين
منتجات متوسطية طبيعية عالية الجودة ولوجستيات موثوقة لضمان رحلة سلسة من بساتيننا إلى رفوفكم.
`}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="bg-white text-[#414A38] rounded-2xl p-8 shadow-md"
            dir={lang === "AR" ? "rtl" : "ltr"}
          >
            <div className="flex items-start gap-4">
              <FaHandshake className="text-8xl pb-16 text-[#414A38]" />
              <div className={lang === "AR" ? "text-right" : "text-left"}>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {lang === "EN" ? "What We Offer" : "ما نقدمه"}
                </h3>
                <p className="text-sm leading-relaxed">
                  {lang === "EN"
                    ? "Premium Mediterranean natural products include olive oil, pickles, jams, and other traditional natural goods. All sourced from the rich agricultural lands of Hasbaya, Lebanon."
                    : `منتجات HASBANI طبيعية متوسطية مميزة تشمل: زيت الزيتون، المخللات، المربيات، وغيره من المنتجات التقليدية الطازجة، جميعها من الأراضي الزراعية الخصبة في لبنان.`}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white text-[#414A38] rounded-2xl p-8 shadow-md"
            dir={lang === "AR" ? "rtl" : "ltr"}
          >
            <div
              className={`flex items-start gap-4 ${lang === "AR" ? "" : ""}`}
            >
              <FaUsers className="text-4xl text-[#414A38]" />
              <div className={lang === "AR" ? "text-right" : "text-left"}>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {lang === "EN" ? "Who We Work With" : "مع من نعمل"}
                </h3>
                <ul className="list-disc list-inside text-sm leading-relaxed">
                  {lang === "EN" ? (
                    <>
                      <li>Distributors & wholesalers</li>
                      <li>Supermarkets & retail chains</li>
                      <li>Hotels, restaurants, and cafés (HORECA)</li>
                      <li>Export agencies & international buyers</li>
                      <li>Co-branding partners</li>
                    </>
                  ) : (
                    <>
                      <li>الموزعون وتجار الجملة</li>
                      <li>السوبرماركت وسلاسل البيع بالتجزئة</li>
                      <li>الفنادق والمطاعم والمقاهي (HORECA)</li>
                      <li>وكالات التصدير والمشترون الدوليون</li>
                      <li>شركاء العلامة المشتركة (Co-branding)</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white text-[#414A38] rounded-2xl p-8 shadow-md"
            dir={lang === "AR" ? "rtl" : "ltr"}
          >
            <div
              className={`flex items-start gap-4 ${lang === "AR" ? "" : ""}`}
            >
              <FaTruck className="text-4xl text-[#414A38]" />
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {lang === "EN" ? "Delivery & Shipping" : "التوصيل والشحن"}
                </h3>
                <ul className="list-disc list-inside text-sm leading-relaxed">
                  {lang === "EN" ? (
                    <>
                      <li>Sea freight – ideal for large orders</li>
                      <li>Air freight – for urgent or smaller shipments</li>
                      <li>
                        Land transport – for regional and neighboring markets
                      </li>
                    </>
                  ) : (
                    <>
                      <li>الشحن البحري – مثالي للطلبات الكبيرة</li>
                      <li>الشحن الجوي – للطرود العاجلة أو الصغيرة</li>
                      <li>
                        النقل البري – للأسواق المحليّة، الإقليمية والدول
                        المجاورة
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div
            className="bg-white text-[#414A38] rounded-2xl p-8 shadow-md"
            dir={lang === "AR" ? "rtl" : "ltr"}
          >
            <div
              className={`flex items-start gap-4 ${lang === "AR" ? "" : ""}`}
            >
              <FaFileContract className="text-4xl text-[#414A38]" />
              <div className={lang === "AR" ? "text-right" : "text-left"}>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {lang === "EN" ? "Business Terms" : "شروط التعامل التجاري"}
                </h3>
                <ul className="list-disc list-inside text-sm leading-relaxed">
                  {lang === "EN" ? (
                    <>
                      <li>Flexible minimum order quantities</li>
                      <li>50% down payment, balance before shipment</li>
                      <li>FOB by default; CIF/DDP on request</li>
                      <li>Delivery timeline: 10–60 days</li>
                      <li>Retail-ready or bulk packaging options</li>
                    </>
                  ) : (
                    <>
                      <li>نعمل بما يناسب جميع أحجام الشركاء</li>
                      <li>الحد الأدنى للطلب: مرن بحسب المنتج والسوق</li>
                      <li>شروط الدفع: %50 دفعة أولى، والباقي قبل الشحن</li>
                      <li>
                        شروط الشحن: FOB بشكل افتراضي، مع إمكانية CIF أو DDP عند
                        الطلب
                      </li>
                      <li>
                        مدة التسليم: 10، 30 أو 60 يومًا بحسب الوجهة واللوجستيات
                      </li>
                      <li>
                        خيارات التغليف: متاحة بوحدات جاهزة للبيع بالتجزئة أو
                        بطلبات بالجملة
                      </li>
                      <li>
                        جاهزون للتصدير مع جميع المستندات المطلوبة، ودعم كامل في
                        التخليص الجمركي والشهادات
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div
          className={`mt-12 text-sm md:text-base ${
            lang === "AR" ? "text-right" : "text-left"
          }`}
        >
          <p>
            {lang === "AR"
              ? "تواصل معنا"
              : "Export-ready with all required documentation"}
          </p>

          <p>
            {lang === "AR"
              ? "لمزيد من المعلومات حول التعاون، التوزيع، أو فرص الشراكة مع HASBANI، يُرجى التواصل معنا عبر القنوات الرسمية."
              : "Support with customs clearance & certifications"}
          </p>
        </div>
      </section>
    </div>
  );
}
