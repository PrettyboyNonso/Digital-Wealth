const HowItWorks = () => {
  const CircleCard = ({
    step,
    head,
    paragraph,
  }: {
    step: string;
    head: string;
    paragraph: string;
  }) => {
    return (
      <div className="flex flex-col flex-shrink-0 flex-grow-0 basis-[23%]">
        <small className="font-mons font-semibold capitalize">{step}</small>
        <h2 className="mt-3 font-mons capitalize font-bold text-sm">{head}</h2>
        <p className="font-medium mt-2 text-xs font-mons capitalize">
          {paragraph}
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="mt-16 w-full flex items-center flex-col">
        <h4 className="font-mons uppercase text-xs font-bold text-blue-700">
          how it works
        </h4>
        <h1 className="mt-3 capitalize font-bold font-mons text-xl">
          have your <span className="text-orange-700">account</span> up and
          ready in <span className="text-orange-700">minutes</span>
        </h1>
      </div>

      <div className="mt-12 min-h-20 flex items-center w-full justify-center gap-9">
        <CircleCard
          step="no .1"
          head="creating an account"
          paragraph=" Sign up for a new account quickly by providing your basic details. The
          process is simple, secure, and designed to get you started with
          minimal hassle. Begin your trading journey today."
        />
        <CircleCard
          step="no .2"
          head="Log in to Your Account"
          paragraph=" Easily log in to your account using your secure credentials. Our platform ensures your information is protected, allowing you to access your dashboard anytime and stay connected to the markets."
        />
        <CircleCard
          step="no .3"
          head="Trade"
          paragraph=" Start trading with our user-friendly interface. Access diverse global markets, execute trades seamlessly, and utilize powerful tools to make informed decisions and maximize your returns."
        />
        <CircleCard
          step="no .4"
          head="Earn"
          paragraph=" Watch your investments pay off. As you trade successfully, earn rewards and grow your portfolio. Our platform provides opportunities to secure your financial future through strategic trading."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
