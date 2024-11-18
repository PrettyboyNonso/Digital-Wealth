import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[580px] border-t w-full flex items-start md:gap-4 lg:gap-0 lg:justify-between px-4 md:px-10 py-16 md:py-4">
      <div className="flex-shrink-0 flex-grow-0 md:basis-[50%]  lg:basis-[60%] w-full px-4 lg:px-10 py-6">
        <h1 className="font-mons uppercase font-bold  ">
          Log In to your account
        </h1>
        <p className="max-w-[90%] mt-1 text-xs capitalize font-mons font-medium text-gray-700">
          enter your credentials to access your account
        </p>

        <form action="" className="mt-12 w-full flex flex-col gap-6 ">
          <div className="flex flex-col gap-1 font-mons capitalize font-medium text-[13px]">
            <p>email address</p>
            <input
              type="text"
              placeholder="Email Address"
              className="h-12 lg:h-10 px-2 outline-teal-600 rounded-md lg:rounded-xl border border-solid w-full lg:w-[80%] text-xs"
            />
          </div>
          <div className="flex flex-col gap-1 font-mons capitalize font-medium text-[13px]">
            <p>password</p>
            <input
              type="password"
              placeholder="Enter Password"
              className="h-12 lg:h-10 px-2 outline-teal-600 rounded-md lg:rounded-xl border border-solid w-full lg:w-[80%] text-xs"
            />
          </div>
        </form>
        <div className="mt-4 lg:w-[80%] w-full">
          <button className="bg-teal-600 w-full h-10 text-xs capitalize font-mons text-white font-bold rounded-md">
            login
          </button>
          <p className="mt-4 font-medium text-xs font-mons capitalize">
            don't have an account?{" "}
            <Link to="/register" className="underline text-teal-600">
              register
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block flex-shrink-0 flex-grow-0 md:basis-[48%] lg:basis-[38%] px-10 py-6 border border-solid rounded-md bg-teal-600">
        <h1 className="uppercase text-white font-mons font-bold">
          Welcome Back!
        </h1>
        <p className="mt-1 font-semibold font-mons text-xs text-white">
          Log in to access your personalized dashboard, manage your investments,
          and continue trading on a secure and seamless platform.
        </p>

        <div className="w-full h-[380px] rounded-md mt-6">
          <img
            src="/jakub-zerdzicki-U4-I4oH4xlg-unsplash.jpg"
            alt="trading image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
