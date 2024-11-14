import About from "./About";
import Faq from "./Faq";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main className="pb-6">
      <section className="overflow-auto hide-scrollbar">
        <Hero />
      </section>

      <section className="mt-10 px-10">
        <About />
      </section>
      <section className="mt-6 px-10">
        <HowItWorks />
      </section>
      <section className="mt-28 px-10">
        <Testimonials />
      </section>
      <section className="mt-10">
        <Faq />
      </section>
    </main>
  );
};

export default Home;
