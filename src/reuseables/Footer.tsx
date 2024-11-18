import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const showFooter =
    location.pathname === "/register" || location.pathname === "/login";
  return (
    <footer
      className={`w-full border border-solid  max-h-full md:py-8 md:px-8 px-6 py-4 static bottom-0 ${
        showFooter && "hidden md:block"
      }`}
    >
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0">
        <div className="flex-shrink-0 flex-grow-0 basis-[100%] md:basis-[50%]">
          <h1 className="uppercase font-logo text-slate-900 flex-shrink-0 flex-grow-0 basis-[30%] text-lg">
            digital <span className="text-orange-600">wealth</span>
          </h1>
          <ul className="flex gap-4 mt-3 capitalize font-mons font-medium text-xs">
            <li>home</li>
            <li>about</li>
            <li>faq</li>
            <li>testimonial</li>
            <li>how to start</li>
          </ul>
        </div>

        <div className="flex-shrink-0 flex flex-grow-0 basis-[100%] md:basis-[50%] md:justify-end gap-6 md:gap-12">
          <Link to="/register">
            <button className="bg-orange-950 px-4 text-xs capitalize font-mons font-semibold py-2 w-fit h-fit text-white rounded-sm">
              register
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-orange-950 px-6 rounded-sm text-xs capitalize font-mons font-semibold py-2 w-fit h-fit text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full border-t-2 border-solid mt-10 pt-4">
        <p className="font-mons capitalize font-bold text-xs">
          &copy;2024 digital wealth
        </p>
      </div>
    </footer>
  );
};

export default Footer;
