const AboutPage = () => {
  const aboutdetailsobj = [
    {
      heading: "Top-Notch Trading Tools",
      desc: "Access the most advanced trading technology, built to enhance precision and maximize your investment opportunities.",
    },
    {
      heading: "24/7 Market Access",
      desc: "Stay connected to global markets at any time, with seamless access to trading options around the clock.",
    },
    {
      heading: "Trusted by Thousands",
      desc: "Join a community of traders who rely on our secure and reliable platform to grow their wealth consistently.",
    },
    {
      heading: "Decades of Financial Expertise",
      desc: "Benefit from decades of market knowledge and strategic insight, empowering your investment decisions with confidence.",
    },
  ];
  const AboutDetailsCard = ({
    heading,
    desc,
  }: {
    heading: string;
    desc: string;
  }) => {
    return (
      <div className="flex-grow-0 flex-shrink-0 md:basis-[48%] basis-[100%] border border-solid rounded-md py-2 px-4">
        <h2 className="font-bold capitalize font-mons text-sm">{heading}</h2>
        <p className="text-xs font-mons font-medium capitalize mt-2">{desc}</p>
      </div>
    );
  };
  return (
    <div className="min-h-96 w-full gap-4 px-4 md:px-12 border-t border-solid md:gap-4 flex flex-col lg:flex-row py-8 justify-between items-start">
      <div className="flex-grow-0 order-0 flex-shrink-0 basis-[40%] md:border md:border-solid rounded-md capitalize font-mons md:px-4 md:py-8">
        <p className="font-semibold text-xs text-orange-500 uppercase">
          how it started
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Our Mission is Empowering Global Trading Success
        </h1>
        <p className="md:mt-12 mt-8 text-xs font-medium">
          At digital wealth, we are committed to empowering traders worldwide
          with cutting-edge tools, secure platforms, and seamless access to
          global markets. Our mission is to make trading accessible and
          efficient for everyone, whether you are a seasoned investor or just
          beginning your financial journey. With years of experience and a deep
          understanding of the financial landscape, we have designed a
          comprehensive trading environment that prioritizes safety,
          transparency, and user experience. We utilize advanced encryption
          technology and strict security protocols to safeguard your assets and
          personal data, so you can trade with confidence. Our platform offers
          an extensive array of assets, from stocks and forex to
          cryptocurrencies and commodities, ensuring you have diverse
          opportunities to grow your investments. We also provide educational
          resources and market insights, keeping you informed and equipped to
          make sound trading decisions. At digital wealth, your success is our
          priority. Join a thriving community of traders who trust us to deliver
          exceptional service and reliable trading solutions every day.
        </p>
      </div>
      <div className="flex-grow-0 flex-shrink-0 basis-[58%] flex flex-col justify-between order-2">
        <div className="flex-grow-0 flex-shrink-0 basis-[50%] h-[300px] border border-solid rounded-md">
          <img
            src="/vitaly-gariev-YuO3d4XS6yw-unsplash.jpg"
            alt=""
            className="w-full h-[300px] object-cover rounded-md"
          />
        </div>
        <div className="flex-grow-0 flex-shrink-0 md:basis-[40%] basis-[100%]  mt-4 flex flex-wrap gap-y-4 justify-between">
          {aboutdetailsobj.map((value, index) => (
            <AboutDetailsCard
              heading={value.heading}
              desc={value.desc}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
