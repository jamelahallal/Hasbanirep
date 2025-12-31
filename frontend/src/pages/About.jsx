import heroImage from "../assets/AboutUs/HeroAbout.png";
import logo from "../assets/AboutUs/aboutlogo.svg";
import farmerImage from "../assets/AboutUs/farmer.png";
import olives from "../assets/AboutUs/gloves.jpg";
import { LuHeartHandshake, LuShieldCheck } from "react-icons/lu";
import { FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const splitWords = (text) => {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += 2) {
      lines.push(words.slice(i, i + 2).join(" "));
    }
    return lines;
  };

  const { lang } = useLanguage();

  const content = {
    hero: {
      EN: "Sharing Lebanon's Heritage With The World",
      AR: "مشاركة تراث لبنان مع العالم",
    },
    ourBrand: {
      title: { EN: "Our Brand", AR: "علامتنا التجارية" },
      description: {
        EN: `The name HASBANI reflects the land and river that give life to our products. Our logo tells 
            this story through four elements: The mountain, the tree, the river, and the bridge.`,
        AR: "تعكس علامتنا التجارية HASBANI اسم الأرض والنهر اللذين يمنحان الحياة لمنتجاتنا. ويجسّد شعارنا هذه القصة من خلال أربعة عناصر أساسية: الجبل، الشجرة، النهر، والجسر.",
      },
    },
    symbols: {
      mountain: {
        title: { EN: "The Mountain", AR: "الجبل" },
        description: {
          EN: `The mountain reflects Mount Hermon (Jabal al-Sheikh), which has long been seen 
as a sacred mountain, a meeting place between heaven and earth in ancient 
Canaanite, biblical, and Christian traditions. Towering above the town like a white 
hat, its snow-covered peak serves as a natural freezer, preserving the land and 
symbolizing protection, resilience, and divine presence for the community below.`,
          AR: `يرمز إلى جبل الشيخ (حرمون)، حيث تقع بلدة حاصبيا عند سفوحه، والذي طالما اعتُبر جبلا
              مقدسا، ومكانا للقاء بين السماء والأرض. انه يعلو فوق البلدة كقبعة بيضاء، وتغطيه الثلوج معظم
              العام مجسّدا الحماية، الصمود، والحضور الإلهي لأبناء المنطقة.
              `,
        },
      },
      river: {
        title: { EN: "The River", AR: "النهر" },
        description: {
          EN: `The river carries the name Hasbani itself, flowing with pure water that nourishes the 
fields and orchards of the region. `,
          AR: `يمثّل نهر الحاصباني نفسه ، الذي تجري مياهه النقية لتغذّي الحقول والبساتين، حاملة معها
              نبض الحياة للأرض.
              `,
        },
      },
      tree: {
        title: { EN: "The Tree", AR: "الشجرة" },
        description: {
          EN: `The tree reflects the deep-rooted heritage of the town, where centuries-old groves 
continue to define the landscape and the agricultural way of life. `,
          AR: ` تعبّر عن الجذور العميقة لتراث البلدة، حيث لا تزال البساتين المعمّرة تشكّل ملامح الأرض
              وأسلوب الحياة الزراعي فيها، ولا سيما أشجار الزيتون التي تُعرّف حضارة حاصبيا، والتي يبلغ
              عددها أكثر من مليون وثلاثمئة ألف شجرة زيتون في المنطقة .
              `,
        },
      },
      bridge: {
        title: { EN: "The Bridge", AR: "الجسر" },
        description: {
          EN: `The Bridge of Hasbani, a well-known landmark near the river’s source, connects 
more than just land—it connects generations. As one of the town’s most recognized 
symbols, it stands as evidence about Hasbaya’s history, unity, and the enduring flow 
of life shaped by nature. `,
          AR: `جسر الحاصباني، أحد أبرز معالم المنطقة قرب منبع النهر، لا يربط بين ضفتين فحسب، بل بين
              الأجيال أيضا. فهو رمز للتاريخ والوحدة واستمرارية الحياة التي تصوغها الطبيعة منذ قرون.
              `,
        },
      },
      caption: {
        EN: `Together, these symbols capture the spirit of Hasbaya and inspire everything we do at 
HASBANI, bringing the story of our land and its products to the world.`,
        AR: `
          معا، تجسِد هذه الرموز روح حاصبيا وتلهم كل ما نقوم به في حاصباني، حاملة للعالم قصة أرضٍ تنبص بالحياة ومنتجاتٍ تعبّر عن نقائها وأصالتها
          `,
      },
    },
    mission: {
      title: { EN: "Our Mission", AR: "مهمتنا" },
      description: {
        EN: `Our mission is to set standards for Mediterranean natural products and foods by delivering 
premium products that achieve exceptional quality and purity. We build authentic 
partnerships with those who share our values, ensuring every HASBANI product reflects 
consistent excellence. `,
        AR: `نسعى إلى وضع معايير متميّزة للأغذية الطبيعية في حوض البحر الأبيض المتوسط، من خلال تقديم منتجات
            راقية تتميز بأعلى درجات الجودة والنقاء. نبني شراكات حقيقية مع من يشاركوننا القيم نفسها، لنضمن أن
            يعكس كل منتج من حاصباني التزامنا بالتميّز في كل تفصيل.
            `,
      },
    },

    vision: {
      title: { EN: "Our Vision", AR: "رؤيتنا" },
      description: {
        EN: `At HASBANI, we believe in the strength and integrity of our products. Our local crops are 
deeply tied to our pride and heritage. Our vision is to grow HASBANI into a global 
experience as pioneers in the industry, connecting markets through shared appreciation for 
taste and trust. `,
        AR: `في HASBANI ، نؤمن بقوة منتجاتنا ونزاهتها. فمحاصيلنا المحلية متجذّرة في فخرنا وإرثنا العريق.
            رؤيتنا هي أن ننمّي حاصباني لتصبح تجربة عالمية رائدة في مجال المنتجات الطبيعية، تجمع الأسواق
            حول العالم على تقدير الطعم الأصيل والثقة والجودة التي نتمسّك بها.
            مهمّتنا
            `,
      },
    },

    coreValues: {
      title: {
        EN: "Core Values and Commitment",
        AR: "قيمنا الأساسية والتزامنا",
      },
      values: [
        {
          icon: (
            <LuHeartHandshake className="text-[#414A38] w-16 h-16 md:w-20 md:h-20" />
          ),
          title: { EN: "Honest Performance", AR: " الصدق في الأداء" },
          description: {
            EN: (
              <>
                <b>40+ years </b>of integrity and exacting standards ensure
                trusted, premium products.
              </>
            ),
            AR: ".أكثر من 40 عامًا من النزاهة والدقّة في العمل تضمن منتجات موثوقة وراقية ",
          },
        },
        {
          icon: (
            <LuShieldCheck className="text-[#414A38] w-16 h-16 md:w-20 md:h-20" />
          ),
          title: { EN: "Authenticity", AR: "الأصالة" },
          description: {
            EN: " Pride in our legacy is always prioritized over commercial trends.",
            AR: ".نفخر بإرثنا وتقاليدنا الأصيلة التي نضعها دائما فوق أي توجّه تجاري عابر ",
          },
        },
        {
          icon: (
            <FaHandsHelping className="text-[#414A38] w-28 h-28 md:w-20 md:h-20" />
          ),
          title: { EN: "Empowering Communities", AR: "تمكين المجتمعات" },
          description: {
            EN: (
              <>
                HASBANI partners with over <b>1,000+ local farmers</b> under
                strict quality control, supported by more than{" "}
                <b>50 employees</b> to ensure a reliable supply.{" "}
              </>
            ),
            AR: `تتعاون حاصباني مع أكثر من الف مزارع محلي ضمن نظام رقابة
                    صارم على الجودة، وبدعم أكثر من خمسون موظفًا لضمان استمرارية الإنتاج.
                      `,
          },
        },
        {
          icon: (
            <FaGlobeAmericas className="text-[#414A38] w-28 h-28 md:w-20 md:h-20" />
          ),
          title: { EN: "Eco-friendly Practices", AR: "ممارسات صديقة للبيئة" },
          description: {
            EN: `HASBANI collaborates with local authorities and aligns with 
          international certifications to uphold best practices and global standards.`,
            AR: (
              <>
                تعمل <span dir="ltr">HASBANI</span> .بالشراكة مع السلطات
                المحلية، ووفق المعايير والشهادات الدولية، للحفاظ على أفضل
                الممارسات البيئية والمستدامة عالميًا
              </>
            ),
          },
        },
      ],
    },
    whyChoose: {
      title: { EN: "Why Choose Hasbani?", AR: "لماذا تختار HASBANI ؟" },
      cards: [
        {
          number: 1,
          title: {
            EN: "Unique Land, Exceptional Products",
            AR: "أرض فريدة، منتجات استثنائية",
          },
          description: {
            EN: `Our products come from the fertile mountains of South Lebanon, where they are fed by the 
clean waters of the Hasbani River and the rich soil of Hasbaya. The area has a special 
climate, with cold winters, warm sunny summers, fresh springs, and mild autumns. These 
natural changes through the seasons help every olive, fruit, and herb grow with a unique 
taste, smell, and quality you won’t find anywhere else.`,
            AR: `تنبت منتجات حاصباني في جبال جنوب لبنان الخصبة، حيث تُروى بمياه نهر الحاصباني النقية
                        وتغتذي من تربة حاصبيا الغنية. تتميز المنطقة بمناخ متنوع يجمع بين شتاء بارد، وصيف دافئ مشمس،
                        وربيع نضر، وخريف معتدل. هذا التناغم الطبيعي عبر الفصول يمنح كل ثمرة زيتون وكل فاكهة ونبتة نكهة
                        وجودة لا مثيل لهما.
                        `,
          },
        },
        {
          number: 2,
          title: { EN: "Generations of Expertise", AR: "أجيال من الخبرة" },
          description: {
            EN: `Combining centuries of traditional knowledge with modern standards, we ensure that every 
HASBANI product reflects excellence and authenticity.`,
            AR: `نمزج في حاصباني بين إرث عريق من المعرفة التقليدية ومعايير حديثة للجودة، لنقدّم منتجات تعكس
                        الأصالة والتميّز في كل تفصيل .
                        `,
          },
        },
        {
          number: 3,
          title: { EN: "A Legacy You Can Rely On", AR: "إرث يمكنك الوثوق به" },
          description: {
            EN: `HASBANI is more than natural products-it is the story of a land, its people, and generations 
of care, shared with the world in every bottle, jar, and package `,
            AR: `حاصباني ليست مجرد اسم، بل حكاية أرض وشعب وأجيال تربّت على تقدير الأرض، نشاركه مع
                        العالم في كل منتج من منتجاتنا.
                        `,
          },
        },
        {
          number: 4,
          title: { EN: "Trusted by Communities", AR: "ثقة مجتمعية" },
          description: {
            EN: `Through partnerships with local farmers and artisans, we support communities while 
maintaining strict quality control from harvest to delivery. `,
            AR: `نؤمن بأن جودة منتجاتنا تبدأ من أرضها، لذا نعمل مع المزارعين والحرفيين المحليين بشراكات مبنية على
                        الثقة والاحترام المتبادل، مع التزام صارم بمراقبة الجودة من الحصاد إلى التغليف .
                        `,
          },
        },
      ],
    },
    qualityStory: {
      title: { EN: "Our Focus on Quality & Safety", AR: "الجودة والسلامة" },
      paragraphs: {
        EN: [
          `At HASBANI, cleanliness and hygiene are at the heart of everything we do. From the fields 
to processing, every step follows strict sanitation protocols to ensure that our products are 
safe, pure, and of the highest quality. `,
          `We are proud to adhere to ISO standards, reflecting our dedication to the best international 
practices in food safety, production, and quality management. This commitment 
guarantees that every product carrying the HASBANI name meets consistent, globally 
recognized standards, giving our customers and partners confidence and peace of mind. `,
          `Quality, safety, and purity are not just goals, they are promises we uphold in every bottle, 
jar, and package.`,
        ],
        AR: [
          `النظافة والسلامة الصحيّة في HASBANI هما أساس في كل ما نقوم به، هناك بروتوكالات صارمة، من
الحقول الى مراحل المعالجة، لضمان منتجات آمنة، نقيّة وعالية الجودة.
`,
          `إننا نفخر بالالتزام بمعايير ISO ، مما يعكس حرصنا على أفضل الممارسات العالمية في سلامة الأغذية
وإدارة الإنتاج والجودة. هذا الالتزام يضمن أن كل منتج يحمل اسم HASBANI يمتثل لمعايير عالمية
موثوقة، مما يمنح عملاءنا وشركاءنا الثقة والطمأنينة.
`,
          `الجودة والسلامة والنقاء ليست مجرد أهداف بالنسبة لنا، بل هي وعود نفي بها ونتحمّل مسؤوليتها.

`,
        ],
      },
    },
  };

  return (
    <div className="pt-20 relative w-full bg-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto object-cover"
        />
        <div
          className={`absolute top-8 md:top-32 left-8 max-w-md md:max-w-xl lg:max-w-2xl
    ${lang === "AR" ? "text-right" : "text-left"}`}
        >
          <h1
            className={`${
              lang === "AR"
                ? "text-3xl md:text-6xl lg:text-7xl"
                : "text-2xl md:text-5xl lg:text-6xl"
            } 
      font-serif text-white mb-6 leading-tight`}
          >
            {lang === "EN"
              ? splitWords(content.hero.EN).map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))
              : splitWords(content.hero.AR).map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
          </h1>
        </div>
      </div>

      {/* Our Brand Section */}
      <div className="bg-gray-100 py-16 px-4 md:px-12 lg:px-24 flex flex-col items-center">
        <div
          className={`bg-white rounded-2xl shadow-md p-6 md:p-10 w-full md:w-4/5 ${
            lang === "EN" ? "text-left" : "text-right"
          }`}
          dir={lang === "EN" ? "ltr" : "rtl"}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-800">
            {lang === "EN"
              ? content.ourBrand.title.EN
              : content.ourBrand.title.AR}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {lang === "EN"
              ? content.ourBrand.description.EN
              : content.ourBrand.description.AR}
          </p>
        </div>

        {/* Symbols Section */}
        <div className="bg-white mt-12 p-8 rounded-2xl shadow-md w-full md:w-4/5 flex flex-col items-center text-gray-700">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-10 relative">
            {/* Left side */}
            <div
              className={`flex flex-col gap-8 md:w-1/3 ${
                lang === "EN" ? "text-left" : "text-right"
              }`}
              dir={lang === "EN" ? "ltr" : "rtl"}
            >
              <div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">
                  {lang === "EN"
                    ? content.symbols.mountain.title.EN
                    : content.symbols.mountain.title.AR}
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {lang === "EN"
                    ? content.symbols.mountain.description.EN
                    : content.symbols.mountain.description.AR}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">
                  {lang === "EN"
                    ? content.symbols.river.title.EN
                    : content.symbols.river.title.AR}
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {lang === "EN"
                    ? content.symbols.river.description.EN
                    : content.symbols.river.description.AR}
                </p>
              </div>
            </div>

            {/* Center logo */}
            <div className="md:w-1/3 relative flex justify-center">
              <img
                src={logo}
                alt="Hasbani Logo"
                className="w-72 md:w-[26rem] lg:w-[32rem] object-contain"
              />
              <div className="tracking-wider scale-x-125 absolute bottom-14 text-gray-400 text-xs md:text-base">
                NATURE'S TASTE
              </div>
            </div>

            {/* Right side */}
            <div
              className="flex flex-col gap-8 md:w-1/3"
              dir={lang === "EN" ? "ltr" : "rtl"}
            >
              <div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">
                  {lang === "EN"
                    ? content.symbols.tree.title.EN
                    : content.symbols.tree.title.AR}
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {lang === "EN"
                    ? content.symbols.tree.description.EN
                    : content.symbols.tree.description.AR}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">
                  {lang === "EN"
                    ? content.symbols.bridge.title.EN
                    : content.symbols.bridge.title.AR}
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {lang === "EN"
                    ? content.symbols.bridge.description.EN
                    : content.symbols.bridge.description.AR}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-12 w-full md:w-4/5 flex justify-center">
          {/* Arrow */}
          <div className="absolute -top-10 flex justify-center">
            <svg
              width="60"
              height="40"
              viewBox="0 0 60 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-300"
            >
              <path
                d="M30 0 C30 18 30 18 30 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M24 22 L30 28 L36 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Caption Box */}
          <div
            className={`bg-white px-8 py-6 rounded-xl shadow-md text-center max-w-3xl ${
              lang === "EN" ? "text-left" : "text-right"
            }`}
            dir={lang === "EN" ? "ltr" : "rtl"}
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {lang === "EN"
                ? content.symbols.caption.EN
                : content.symbols.caption.AR}
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="flex flex-col bg-gray-100 md:flex-row w-full h-auto">
        <div className="md:w-1/2 bg-[#414A38] text-white p-8 md:p-16 flex flex-col justify-center rounded-br-[80px] rounded-tr-[80px]">
          <div className="mb-8">
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
              dir={lang === "EN" ? "ltr" : "rtl"}
              style={{ textAlign: lang === "EN" ? "left" : "right" }}
            >
              {lang === "EN"
                ? content.mission.title.EN
                : content.mission.title.AR}
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed"
              dir={lang === "EN" ? "ltr" : "rtl"}
              style={{ textAlign: lang === "EN" ? "left" : "right" }}
            >
              {lang === "EN"
                ? content.mission.description.EN
                : content.mission.description.AR}
            </p>
          </div>
          <div>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
              dir={lang === "EN" ? "ltr" : "rtl"}
              style={{ textAlign: lang === "EN" ? "left" : "right" }}
            >
              {lang === "EN"
                ? content.vision.title.EN
                : content.vision.title.AR}
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed"
              dir={lang === "EN" ? "ltr" : "rtl"}
              style={{ textAlign: lang === "EN" ? "left" : "right" }}
            >
              {lang === "EN"
                ? content.vision.description.EN
                : content.vision.description.AR}
            </p>
          </div>
        </div>
        <div
          className="md:w-1/2 w-full h-96 md:h-[500px] rounded-tl-[80px] rounded-bl-[80px] bg-cover bg-center bg-gray-100"
          style={{ backgroundImage: `url(${farmerImage})` }}
        ></div>
      </div>
      <br />

      {/* Core Values Section */}
      <div className="bg-[#414A38] py-16 px-4 md:px-12 lg:px-24 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 text-center">
          {lang === "EN"
            ? content.coreValues.title.EN
            : content.coreValues.title.AR}
        </h2>
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 w-full md:w-11/12 lg:w-10/12 flex flex-col gap-10">
          {content.coreValues.values.map((v, i) => (
            <div key={i}>
              <div
                className={`flex items-start gap-6 ${
                  lang === "EN" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {v.icon}
                <div style={{ textAlign: lang === "EN" ? "left" : "right" }}>
                  <h3 className="text-xl font-bold font-serif text-gray-800">
                    {lang === "EN" ? v.title.EN : v.title.AR}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {lang === "EN" ? v.description.EN : v.description.AR}
                  </p>
                </div>
              </div>
              {i < content.coreValues.values.length - 1 && (
                <hr className="border-gray-400 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Hasbani Section */}
      <div className="py-16 px-4 md:px-12 lg:px-24 flex flex-col items-center bg-gray-50">
        <h2
          className={`text-3xl md:text-4xl font-serif text-gray-800 mb-12 text-center`}
          dir={lang === "AR" ? "rtl" : "ltr"}
        >
          {lang === "EN"
            ? content.whyChoose.title.EN
            : content.whyChoose.title.AR}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {content.whyChoose.cards.map((c) => (
            <div
              key={c.number}
              className={`relative group ${
                lang === "EN" ? "text-left" : "text-right"
              }`}
            >
              <div
                className={`absolute -top-7 ${
                  lang === "EN" ? "-left-4 sm:-left-7" : "-right-4 sm:-right-7"
                } w-20 h-20 rounded-full border-4 border-gray-300 z-0`}
              ></div>
              <div
                className={`absolute -top-3 text-4xl font-serif text-gray-800 z-10 ${
                  lang === "EN" ? "left-0" : "right-0"
                }`}
              >
                {c.number}
              </div>
              <div
                className={`bg-white rounded-2xl p-6 md:p-8 relative z-20 shadow-[0_6px_25px_rgba(0,0,0,0.15)] border border-gray-200 transition-all duration-300 group-hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] ${
                  lang === "EN" ? "ml-6" : "mr-6"
                }`}
                dir={lang === "AR" ? "rtl" : "ltr"}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {lang === "EN" ? c.title.EN : c.title.AR}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {lang === "EN" ? c.description.EN : c.description.AR}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <section
        className={`w-full flex flex-col md:flex-row mb-1 ${
          lang === "AR" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Text Block */}
        <div
          className="md:flex-1 bg-[#414A38] text-white p-8 md:p-16 flex flex-col justify-between"
          dir={lang === "AR" ? "rtl" : "ltr"}
        >
          <div className="max-w-md mx-auto">
            <h2
              className="text-3xl font-serif mb-6 text-center md:text-left"
              dir={lang === "AR" ? "rtl" : "ltr"} // ensures proper RTL reading
              style={{ textAlign: lang === "AR" ? "right" : "left" }} // forces alignment
            >
              {lang === "EN"
                ? content.qualityStory.title.EN
                : content.qualityStory.title.AR}
            </h2>
            <div
              className={`space-y-4 text-sm md:text-base leading-relaxed flex-1 text-gray-100`}
            >
              {(lang === "EN"
                ? content.qualityStory.paragraphs.EN
                : content.qualityStory.paragraphs.AR
              ).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:flex-1 h-auto">
          <img
            src={olives}
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
