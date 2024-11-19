import { createContext, FormEvent, useState } from "react";

interface LoginContextType {
  registerFunction: (e: FormEvent<HTMLFormElement>) => void;
  errorMessage: string;
  successMessage: string;
  loginFunc: (e: FormEvent<HTMLFormElement>) => void;
  LoginerrorMessage: string;
}
const LoginContext = createContext<LoginContextType | null>(null);

export default LoginContext;

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [LoginerrorMessage, setLoginErrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  const authenticateLogin = (e: FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    if (userEmail.trim() !== "" && userPassword.trim() !== "") {
      if (!emailRegex.test(userEmail)) {
        setLoginErrorMessage("Please enter a valid email");
        return;
      }
      setLoginErrorMessage("");
      return {
        userEmail: userEmail,
        userPassword: userPassword,
        authenticated: true,
      };
    } else {
      setLoginErrorMessage("You cannot have an empty field");
    }
  };

  const authenticateRegister = (e: FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fullName = form.username.value;
    const userEmail = form.userEmail.value;
    const userPassword = form.userPassword.value;
    const confirmPassword = form.confirmPassword.value;
    if (
      fullName.trim() !== "" &&
      userEmail.trim() !== "" &&
      userPassword.trim() !== "" &&
      confirmPassword.trim() !== ""
    ) {
      if (!emailRegex.test(userEmail)) {
        setErrorMessage("Please enter a valid email");
        return;
      }
      if (userPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      setErrorMessage("");
      setsuccessMessage(
        "An email has been sent to your gmail account, proceed there for further confirmation"
      );
      return {
        fullName: fullName,
        userEmail: userEmail,
        userPassword: userPassword,
        confirmPassword: confirmPassword,
        authenticated: true,
      };
    } else {
      setErrorMessage("You left some fields empty");
    }
  };
  const registerFunction = async (e: FormEvent<HTMLFormElement>) => {
    const details = authenticateRegister(e);
    console.log(details?.authenticated);
  };

  const loginFunc = async (e: FormEvent<HTMLFormElement>) => {
    const details = authenticateLogin(e);
    console.log(details?.authenticated);
  };

  const values = {
    registerFunction,
    errorMessage,
    successMessage,
    LoginerrorMessage,
    loginFunc,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};
