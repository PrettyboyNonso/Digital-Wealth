const HowItWorks = () => {
  const CircleCard = ({
    head,
    paragraph,
  }: {
    head: string;
    paragraph: string;
  }) => {
    return (
      <div className="flex flex-col flex-shrink-0 flex-grow-0 basis-[100%] md:basis-[45%] lg:basis-[23%] border-b border-t py-2 border-solid">
        <h2 className="mt-3 font-mons capitalize font-bold text-sm text-yellow-700">
          {head}
        </h2>
        <p className="font-medium mt-2 text-xs font-mons capitalize">
          {paragraph}
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="lg:mt-10 mt-4 w-full flex items-center flex-col py-4">
        <h4 className="font-mons uppercase text-xs font-bold text-blue-700">
          how it works
        </h4>
        <h1 className="mt-3 capitalize font-bold font-mons text-lg md:text-xl text-center">
          have your <span className="text-orange-700">account</span> up and
          ready in <span className="text-orange-700">minutes</span>
        </h1>
      </div>

      <div className="mt-8 min-h-20 flex flex-col flex-wrap lg:flex-nowrap md:flex-row md:items-center w-full md:justify-center gap-9">
        <CircleCard
          head="creating an account"
          paragraph=" Sign up for a new account quickly by providing your basic details. The
          process is simple, secure, and designed to get you started with
          minimal hassle. Begin your trading journey today."
        />
        <CircleCard
          head="Log in to Your Account"
          paragraph=" Easily log in to your account using your secure credentials. Our platform ensures your information is protected, allowing you to access your dashboard anytime and stay connected to the markets."
        />
        <CircleCard
          head="Trade"
          paragraph=" Start trading with our user-friendly interface. Access diverse global markets, execute trades seamlessly, and utilize powerful tools to make informed decisions and maximize your returns."
        />
        <CircleCard
          head="Earn"
          paragraph=" Watch your investments pay off. As you trade successfully, earn rewards and grow your portfolio. Our platform provides opportunities to secure your financial future through strategic trading."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
