import Contact from "./Contact";
import Faq from "./Faq";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Market from "./Market";
import Benefits from "./Benefits";
import Trading from "./Trading";
import LearnTrading from "./LearnTrading";
import Winners from "@/reuseables/Winners";
import Plans from "./Plans";
import { useContext, useEffect } from "react";
import LoginContext from "@/context/LoginContext";
import About from "./About";

const Home = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("context not found");
  }

  const { setIsActive, sectionArray } = context;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-id");

            if (sectionId === "hero") {
              setIsActive("home");
            } else if (sectionId === "market") {
              setIsActive("market");
            } else if (sectionId === "about") {
              setIsActive("about");
            } else if (sectionId === "trade") {
              setIsActive("trade");
            } else if (sectionId === "plans") {
              setIsActive("plans");
            } else if (sectionId === "testimonial") {
              setIsActive("testimonials");
            } else if (sectionId === "support") {
              setIsActive("support");
            }
          }
        });
      },
      { threshold: 0.8 }
    );
    sectionArray.current.forEach((section) => {
      if (section) observer.observe(section);
    });
  }, []);
  return (
    <main className="pb-6 mb-4 relative">
      <Winners />
      <section
        className="overflow-auto hide-scrollbar"
        ref={(el) => (sectionArray.current[0] = el)}
        data-id="hero"
      >
        <Hero />
      </section>
      <section
        className="px-2 md:px-10 -mt-16  relative z-40 py-6"
        ref={(el) => (sectionArray.current[1] = el)}
        data-id="market"
      >
        <Market />
      </section>
      <section
        className="px-4 lg:px-10  py-6 bg-gray-100 mt-4 min-h-72"
        ref={(el) => (sectionArray.current[2] = el)}
        data-id="market"
      >
        <Benefits />
      </section>
      <section
        className="px-4 md:px-10 lg:px-32 mt-10 "
        ref={(el) => (sectionArray.current[3] = el)}
        data-id="market"
      >
        <Trading />
      </section>
      <section
        className="mt-20 px-10"
        ref={(el) => (sectionArray.current[4] = el)}
        data-id="about"
      >
        <About />
      </section>
      <section
        className=" px-10"
        ref={(el) => (sectionArray.current[5] = el)}
        data-id="about"
      >
        <HowItWorks />
      </section>

      <section
        className="mt-28 px-4 md:px-10"
        ref={(el) => (sectionArray.current[6] = el)}
        data-id="trade"
      >
        <LearnTrading />
      </section>
      <section
        className="mt-28 px-10"
        ref={(el) => (sectionArray.current[7] = el)}
        data-id="plans"
      >
        <Plans />
      </section>
      <section
        className="mt-28 px-10"
        ref={(el) => (sectionArray.current[8] = el)}
        data-id="testimonial"
      >
        <Testimonials />
      </section>
      <section
        className="mt-10"
        ref={(el) => (sectionArray.current[9] = el)}
        data-id="support"
      >
        <Faq />
      </section>

      <section
        className="px-4 lg:px-10 mt-10"
        ref={(el) => (sectionArray.current[10] = el)}
        data-id="support"
      >
        <Contact />
      </section>
    </main>
  );
};

export default Home;
