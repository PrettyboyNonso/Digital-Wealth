import { Winners } from "@/App";
import LoginContext from "../context/LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Register = ({
  userData,
}: {
  userData: { name: string; money: number };
}) => {
  const context = useContext(LoginContext);
  if (context === null) {
    throw new Error("state is mismanaged");
  }
  const { registerFunction, errorMessage, successMessage } = context;

  return (
    <div className="relative min-h-[580px] border-t  w-full flex items-start border border-solid md:gap-4 lg:gap-0 lg:justify-between px-4 lg:px-10 py-4">
      {userData.name !== "" && userData.money !== 0 && (
        <Winners userData={userData} />
      )}
      <div className="flex-shrink-0 flex-grow-0 basis-[100%] md:basis-[50%] lg:basis-[60%] px-4 lg:px-10 py-6">
        <h1 className="font-mons uppercase font-bold ">get started now</h1>
        <p className="max-w-[100%] mt-1 text-xs capitalize font-mons font-medium text-gray-700">
          sign up today to unlock powerful trading tools.
        </p>

        <form
          action=""
          className="mt-8 w-full flex flex-col gap-6 "
          onSubmit={registerFunction}
        >
          <div className="flex flex-col gap-1 font-mons capitalize font-medium text-[13px]">
            <p className="">name</p>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Full Name"
              className="h-12 lg:h-10 px-2 outline-teal-600 rounded-md lg:rounded-xl border border-solid w-full lg:w-[80%] text-xs"
            />
          </div>
          <div className="flex flex-col gap-1 font-mons capitalize font-medium text-[13px]">
            <p>email address</p>
            <input
              type="text"
              name="userEmail"
              placeholder="Email Address"
              className="h-12 lg:h-10 px-2 outline-teal-600 rounded-md lg:rounded-xl border border-solid w-full lg:w-[80%] text-xs"
            />
          </div>
          <div className="flex flex-col gap-1 font-mons capitalize font-medium text-[13px]">
            <p>password</p>
            <input
              type="password"
              name="userPassword"
              placeholder="Enter Password"
              className="h-12 lg:h-10 px-2 outline-teal-600 rounded-md lg:rounded-xl border border-solid w-full lg:w-[80%] text-xs"
            />
          </div>
          <div className="flex flex-col gap-1 font-mons capitalize font-medium text-[13px]">
            <p>confirm password</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Your Password"
              className="h-12 lg:h-10 px-2 outline-teal-600 rounded-md lg:rounded-xl border border-solid w-full lg:w-[80%] text-xs"
            />
          </div>
          <div className="mt-4 lg:w-[80%] w-full">
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
            <p className="mt-4 font-medium text-xs font-mons capitalize">
              have an account already?{" "}
              <Link to="/login" className="underline text-teal-600">
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex-shrink-0 flex-grow-0 md:basis-[48%] lg:basis-[38%] hidden md:block px-10 py-6 border border-solid rounded-md bg-teal-600">
        <h1 className="uppercase text-white font-mons font-bold">
          Join and Start Trading Today
        </h1>
        <p className="mt-1 font-semibold font-mons text-xs text-white">
          Quick and easy registration to access a world of trading
          opportunities.
        </p>

        <div className="w-full h-[380px] mt-6">
          <img
            src="/dylan-calluy-JpflvzEl5cg-unsplash.jpg"
            alt="trading image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
