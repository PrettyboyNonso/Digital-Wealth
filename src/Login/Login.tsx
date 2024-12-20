import LoginContext from "@/context/LoginContext";
import { CSSProperties, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [loading] = useState(true);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }
  const { loginFunc, LoginerrorMessage, loginLoading } = context;
  return (
    <div className="min-h-dvh w-full flex justify-center items-center bg-teal-50 md:px-10 px-2 lg:px-0">
      <div className="lg:w-[40%] w-[100%]  py-6 flex flex-col items-center justify-center bg-white px-3 md:px-10 rounded-md">
        <h1 className="font-mons uppercase font-bold self-start text-sm">
          Log In to your account
        </h1>
        <p className="max-w-[100%] mt-1 text-[11px] capitalize font-mons font-semibold text-gray-700 self-start">
          enter your credentials to access your account
        </p>

        <form
          action=""
          className="mt-6 w-full flex flex-col items-center gap-6"
          onSubmit={loginFunc}
        >
          <div className="gap-5 font-mons capitalize font-medium text-[13px] w-full flex flex-col items-center">
            <div className="w-full flex flex-col gap-1">
              <p className="self-start ml-2 text-xs text-gray-700">
                email address
              </p>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="h-12 lg:h-15 px-2 outline-teal-600 rounded-sm lg:rounded-xl border border-solid w-full lg:w-[100%] text-xs"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <p className="self-start ml-2 text-xs text-gray-700">password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="h-12 lg:h-15 px-2 outline-teal-600 rounded-sm lg:rounded-xl border border-solid w-full lg:w-[100%] text-xs"
              />
            </div>
          </div>

          <div className="mt-1 w-full">
            <button
              className="bg-teal-600 w-full h-10 text-xs capitalize font-mons text-white font-bold rounded-md"
              type="submit"
            >
              {loginLoading ? (
                <ClipLoader
                  color="white"
                  loading={loading}
                  cssOverride={override}
                  size={30}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "login"
              )}
            </button>
            <p className="mt-4 font-medium text-xs font-mons text-red-500">
              {LoginerrorMessage}
            </p>
            <p className="mt-4 font-semibold text-[11px] font-mons capitalize">
              don't have an account?{" "}
              <p
                className="underline text-teal-600"
                onClick={() => (window.location.href = "/register")}
              >
                register
              </p>
            </p>
            <p className="mt-1 italic font-semibold text-teal-500 text-[11px] font-mons capitalize">
              <Link to="/">back to homepage</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
