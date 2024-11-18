import { MapPin } from "lucide-react";

const Testimonials = () => {
  interface testi {
    testimony: string;
    name: string;
    location: string;
    rating: number;
  }
  const testimonials: testi[] = [
    {
      testimony:
        "I've had an incredible experience with this platform. The user interface is seamless, and I appreciate the prompt and helpful customer support. Trading has never been this stress-free and rewarding.",
      name: "Caleb Harrison",
      location: "New York, NY",
      rating: 5,
    },
    {
      testimony:
        "This broker truly stands out from the rest. They offer a wide range of tools for both beginners and experienced traders. My investments feel secure, and I've seen consistent returns since I started.",
      name: "Alyssa Martinez",
      location: "Los Angeles, CA",
      rating: 4.5,
    },
    {
      testimony:
        "I was initially skeptical, but this broker has exceeded my expectations. Their attention to detail and focus on security are unmatched. I've recommended this platform to all my friends in the trading community.",
      name: "Samuel Bennett",
      location: "Houston, TX",
      rating: 5,
    },
    {
      testimony:
        "The educational resources provided by this broker are phenomenal. I've learned so much about trading, and my confidence has grown significantly. Excellent service and support all the way!",
      name: "Grace Thompson",
      location: "Chicago, IL",
      rating: 4.7,
    },
  ];

  const TestimonialCard = ({ testimony, name, location }: testi) => {
    return (
      <div className="border-2 snap-start border-yellow-700 flex-shrink-0 flex-grow-0 basis-[100%] md:basis-[45%] lg:basis-[23%] min-h-fit px-2 py-3 rounded-md ">
        <p className="text-xs font-medium font-mons">{testimony}</p>

        <div className="flex w-full justify-between items-center mt-5">
          <div>
            <h2 className="font-bold font-mons text-xs">{name}</h2>
            <div className="flex items-center gap-1 text-xs mt-1">
              <MapPin className="w-4 h-4" />
              <p className="font-medium font-mons text-xs">{location}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <h1 className="md:text-2xl text-center text-xl uppercase font-mons font-bold items-start flex md:flex-row flex-col gap-2">
          <div className="bg-amber-400  px-3 md:-rotate-2 text-gray-800">
            <h1>world-class</h1>
          </div>{" "}
          customer support
        </h1>
        <p className="mt-3 capitalize font-mons font-medium text-xs text-center">
          don't just take our words for it. Check what our customers say
        </p>
      </div>

      <div className="flex flex-nowrap md:flex-wrap  w-full gap-6 items-end mt-8 md:justify-center overflow-x-scroll snap-x snap-mandatory">
        {testimonials.map((value, index) => (
          <TestimonialCard
            testimony={value.testimony}
            name={value.name}
            location={value.location}
            rating={value.rating}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
