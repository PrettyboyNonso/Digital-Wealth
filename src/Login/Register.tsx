import LoginContext from "../context/LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }
  const { registerFunction, errorMessage, successMessage } = context;

  return (
    <div className="min-h-dvh w-full flex justify-center items-center bg-teal-50 lg:px-0 md:px-10 px-2">
      <div className="lg:w-[40%] w-[100%] py-6 flex flex-col items-center justify-center bg-white px-4 lg:px-10 rounded-md">
        <h1 className="font-mons uppercase font-bold self-start text-sm">
          get started now
        </h1>
        <p className="max-w-[100%] mt-1 text-[11px] capitalize font-mons font-semibold text-gray-700 self-start">
          create your account and enjoy trading tools
        </p>

        <form
          action=""
          className="mt-6 w-full flex flex-col items-center gap-6"
          onSubmit={registerFunction}
        >
          <div className="gap-5 font-mons capitalize font-medium text-[13px] w-full flex flex-col items-center">
            <div className="w-full flex flex-col gap-1">
              <p className="self-start ml-2 text-xs text-gray-700">name</p>
              <input
                type="text"
                name="username"
                placeholder="Enter Your Full Name"
                className="h-12 lg:h-15 px-2 outline-teal-600 rounded-sm lg:rounded-xl border border-solid w-full lg:w-[100%] text-xs"
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="self-start ml-2 text-xs text-gray-700">
                email address
              </p>
              <input
                type="text"
                name="userEmail"
                placeholder="Email Address"
                className="h-12 lg:h-15 px-2 outline-teal-600 rounded-sm lg:rounded-xl border border-solid w-full lg:w-[100%] text-xs"
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="self-start ml-2 text-xs text-gray-700">
                confirm password
              </p>
              <input
                type="password"
                name="userPassword"
                placeholder="Create Your Password"
                className="h-12 lg:h-15 px-2 outline-teal-600 rounded-sm lg:rounded-xl border border-solid w-full lg:w-[100%] text-xs"
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="self-start ml-2 text-xs text-gray-700">
                confirm password
              </p>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                className="h-12 lg:h-15 px-2 outline-teal-600 rounded-sm lg:rounded-xl border border-solid w-full lg:w-[100%] text-xs"
              />
            </div>
          </div>

          <div className="mt-1 w-full">
            <button
              type="submit"
              className="bg-teal-600 w-full h-10 text-xs capitalize font-mons text-white font-bold rounded-md"
            >
              register
            </button>
            <p className="mt-4 font-medium text-xs font-mons text-green-500 ">
              {successMessage}
            </p>
            <p className="mt-4 font-medium text-xs font-mons text-red-500 ">
              {errorMessage}
            </p>
            <p className="mt-4 font-semibold text-[11px] font-mons capitalize">
              have an account already?{" "}
              <Link to="/login" className="underline text-teal-600">
                login
              </Link>
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

export default Register;
