import LoginContext from "@/context/LoginContext";
import { useContext, useEffect } from "react";

const Refresh = () => {
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
              //   setIsActive("home");
            } else if (sectionId === "market") {
              //   setIsActive("market");
            } else if (sectionId === "about") {
              setIsActive("about");
            } else if (sectionId === "trade") {
              //   setIsActive("trade");
            } else if (sectionId === "plans") {
              //   setIsActive("plans");
            } else if (sectionId === "testimonial") {
              //   setIsActive("testimonials");
            } else if (sectionId === "license") {
              //   setIsActive("license");
            } else if (sectionId === "support") {
              //   setIsActive("support");
            }
          }
        });
      },
      { threshold: 1 }
    );
    sectionArray.current.forEach((section) => {
      if (section) observer.observe(section);
    });
  }, []);
  return null;
};

export default Refresh;
