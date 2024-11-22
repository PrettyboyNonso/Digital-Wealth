import About from "../About/About";
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

const Home = () => {
  return (
    <main className="pb-6 mb-4 relative">
      <Winners />

      <section className="overflow-auto hide-scrollbar">
        <Hero />
      </section>
      <section className="px-10 -mt-16  relative z-40 py-6">
        <Market />
      </section>
      <section className="px-10  py-6 bg-blue-950 mt-4 min-h-72">
        <Benefits />
      </section>
      <section className="px-32 mt-10 ">
        <Trading />
      </section>
      <section className="mt-20 px-10">
        <About />
      </section>
      <section className=" px-10">
        <HowItWorks />
      </section>

      <section className="mt-28 px-10">
        <LearnTrading />
      </section>
      <section className="mt-28 px-10">
        <Testimonials />
      </section>
      <section className="mt-10">
        <Faq />
      </section>

      <section className="px-4 lg:px-10 mt-10">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
