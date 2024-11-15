import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border border-solid  max-h-full py-8 px-8">
      <div className="w-full flex items-end">
        <div className="flex-shrink-0 flex-grow-0 basis-[50%]">
          <h1 className="uppercase font-logo text-slate-900 flex-shrink-0 flex-grow-0 basis-[30%] text-lg">
            digital <span className="text-orange-600">wealth</span>
          </h1>
          <ul className="flex gap-4 mt-3 capitalize font-mons font-semibold text-xs">
            <li>home</li>
            <li>about</li>
            <li>faq</li>
            <li>testimonial</li>
            <li>how to start</li>
          </ul>
        </div>

        <div className="flex-shrink-0 flex flex-grow-0 basis-[50%] justify-end gap-12">
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
