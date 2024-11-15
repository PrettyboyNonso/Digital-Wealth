import About from "../About/About";
import Contact from "./Contact";
import Faq from "./Faq";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main className="pb-6 mb-4">
      <section className="overflow-auto hide-scrollbar">
        <Hero />
      </section>
      <section className=" px-10">
        <HowItWorks />
      </section>
      <section className="mt-20 px-10">
        <About />
      </section>

      <section className="mt-28 px-10">
        <Testimonials />
      </section>
      <section className="mt-10">
        <Faq />
      </section>

      <section className="px-10 mt-10">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
