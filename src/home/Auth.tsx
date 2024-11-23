import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
  //   const [uid, setUid] = useState<string | null>(null);
  //   const [token, setToken] = useState<string | null>(null);
  const [responseGood, setResponseGood] = useState(false);
  const location = useLocation();
  const sendtokens = async (UID: string | null, Token: string | null) => {
    if (UID && Token) {
      const response = await fetch(
        "http://localhost:8000/auth/users/activation/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            urlUid: UID,
            urlToken: Token,
          }),
        }
      );
      if (response.ok) {
        setResponseGood(true);
      } else {
        setResponseGood(false);
        console.log("something went wrong", response.status);
      }
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("uid") !== null && params.get("token") !== null) {
      //   setUid(params.get("uid"));
      //   setToken(params.get("token"));
      sendtokens(params.get("uid"), params.get("token"));
    }
  }, []);
  const NotConfirmedPage = () => {
    return (
      <div className="min-w-[500px] border-2 border-solid min-h-48 px-10 py-8 rounded-lg shadow-md">
        <h1 className="text-red-700 font-mons font-semibold capitalize">
          oops!
        </h1>
        <p className="mt-2 text-xs text-red-600 font-bold font-mons capitalize">
          your confirmation is missing the appriopriate credentials
        </p>
        <div className="flex gap-4 mt-8">
          <button className="bg-red-700 px-3 py-2 rounded-sm text-white text-xs font-mons capitalize font-semibold">
            resend link
          </button>
        </div>
      </div>
    );
  };
  const ConfirmedPage = () => {
    return (
      <div className="min-w-[500px] border-2 border-solid min-h-48 px-10 py-8 rounded-lg shadow-md">
        <h1 className="text-teal-800 font-mons font-semibold capitalize">
          welcome onboard!
        </h1>
        <p className="mt-2 text-xs text-green-600 font-bold font-mons capitalize">
          your account has been confirmed, proceed to the login page to login
        </p>
        <div className="flex gap-4 mt-8">
          <button className="bg-red-700 px-3 py-2 rounded-sm text-white text-xs font-mons capitalize font-semibold">
            resend link
          </button>
          <Link to="/login">
            <button className="bg-green-600 px-5 py-2 rounded-sm text-white text-xs font-mons capitalize font-semibold">
              {" "}
              login
            </button>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full bg-teal-50 min-h-dvh flex justify-center items-center">
      <div>{responseGood ? <ConfirmedPage /> : <NotConfirmedPage />}</div>
    </div>
  );
};

export default Auth;
