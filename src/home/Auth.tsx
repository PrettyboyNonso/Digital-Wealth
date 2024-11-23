import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const [uid, setUid] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("uid") !== null && params.get("token") !== null) {
      setUid(params.get("uid"));
      setToken(params.get("token"));
    }
  }, []);
  return (
    <div className="w-full bg-teal-50 min-h-dvh flex justify-center items-center">
      <div>
        <h1>
          {uid !== null && token !== null
            ? ` hi, i am auth.tsx and my params are: ${uid} and ${token}`
            : " hi, i am auth.tsx and my params are: null and null"}
        </h1>
      </div>
    </div>
  );
};

export default Auth;
