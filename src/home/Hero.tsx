import { HeroProps } from "@/lib/utils";

const Hero = () => {
  const HeroSlides = ({ head, paragraph, video, button, index }: HeroProps) => {
    return (
      <div
        className={`mt-0 lg:mt-3 w-full min-h-dvh md:min-h-[430px] absolute flex-shrink-0 flex-grow-0 basis-full ${index}`}
      >
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <div className="absolute z-10 text-white bg-black bg-opacity-60 h-full w-full py-44 px-6 lg:py-28 lg:px-10">
          <h1 className="text-xl lg:text-2xl font-mons capitalize">{head}</h1>
          <p className="mt-2 lg:max-w-[50%] max-w-[90%] font-mons font-medium text-sm">
            {paragraph}
          </p>
          <button className="lg:mt-4 mt-8 capitalize text-xs font-mons bg-green-950 px-4 py-3">
            {button}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-dvh md:min-h-[430px] lg:mt-20 mt-10 overflow-hidden">
      <div className="w-full h-full transition-transform duration-500 hide-scrollbar relative">
        <HeroSlides
          head="  Trade with Confidence on a Trusted Platform"
          paragraph=" Access global markets, advanced trading tools, and secure
            transactions all in one place. Join thousands of satisfied traders
            today."
          video="/7580430-uhd_4096_2160_25fps.mp4"
          button="Start Trading Now"
          index="z-20"
        />
        {/* <HeroSlides
          head="Seamless Trading Across Global Markets"
          paragraph="Access top-tier trading tools, diverse markets, and secure transactions for optimal performance."
          video="/7947481-hd_1920_1080_30fps.mp4"
          button="Get Started Today"
          index="z-10"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
