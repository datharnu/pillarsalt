"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "../../../public/Arrow.png";
import errorIcon from "../../../public/Vector.png";
import close from "../../../public/Close.png";
import Logo from "../../../public/IMG-20230417-WA0010 1.png";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  title: string;
  confirmPassword: string;
  forgetPassword: string;
  placeholder1: string;
  placeholder2: string;
  submitButton: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  title,
  confirmPassword,
  forgetPassword,
  placeholder1,
  placeholder2,
  submitButton,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    // Simulated login check
    if (email === "odunayo@gmail.com" && password === "password") {
      // Redirect to the next step if login is successful
      // For now, let's just log a success message
      console.log("Login successful!");
      onSubmit(email, password); // Call the onSubmit function passed from parent
    } else {
      // Display error message if login fails
      setShowError(true);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setShowError(false); // Clear error message when user starts typing in email input
  };

  return (
    <div className="mx-5">
      {/* Logo */}
      <div className="my-10 -ml-3">
        <Image src={Logo} alt="Logo" height={60} priority />
      </div>

      {/* Welcome message */}
      <div>
        <h1 className="text-[30px] font-semibold">Welcome,</h1>
        <p className="text-[#00000099] font-light ">
          Complete your account set up by providing a password
        </p>

        {/* Error message */}
        {showError && (
          <div className="border border-red-500 bg-red-100 font-light my-10 text-sm px-4 py-3 rounded relative flex">
            {/* Error Icon */}
            <div className="flex -ml-2">
              <div>
                <Image src={errorIcon} alt="error-icon" width={30} />
              </div>
              <span className="px-3">
                The email and password do not match. Please try again
              </span>
            </div>
            {/* Close Icon */}
            <div onClick={handleCloseError}>
              <Image src={close} alt="close-icon" width={30} />
            </div>
          </div>
        )}
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="my-10 text-sm">
        {/* Email Input */}
        <div className="space-y-5 mb-[18rem]">
          <div className="space-y-2">
            <label htmlFor="email" className="font-bold">
              {title}
            </label>
            <div>
              <input
                className="border rounded-lg border-black p-2 w-[21rem]"
                type="email"
                id="email"
                placeholder={placeholder1}
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="font-bold">
              {confirmPassword}
            </label>
            <div>
              <input
                className="border rounded-lg border-black p-2 w-[21rem]"
                type="password"
                id="password"
                placeholder={placeholder2}
                value={password.replace(/./g, "*")}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Forgot Password */}
          <div className="text-[#056839] font-bold">
            <a href="/setpassword" id="forgot-password">
              {forgetPassword}
            </a>
          </div>
        </div>

        {/* Next Button */}
        <div>
          <div className={submitButton}>
            <button type="submit">
              <a
                href="/setpassword"
                id="forgot-password"
                className="flex items-center gap-2"
              >
                <p>Next</p>
                <Image src={Arrow} alt="arrow" />
              </a>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
