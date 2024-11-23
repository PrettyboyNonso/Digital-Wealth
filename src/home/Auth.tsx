import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Auth = () => {
  //   const [param, setParams] = useState({});
  //   const location = useLocation();
  //   useEffect(() => {
  //     const params = new URLSearchParams(location.search);
  //     setParams(params);
  //     console.log(params.get("ids"));
  //   }, []);
  return (
    <div className="w-full bg-teal-50 min-h-dvh flex justify-center items-center">
      <div>
        <h1>hi, i am auth.tsx</h1>
      </div>
    </div>
  );
};

export default Auth;
