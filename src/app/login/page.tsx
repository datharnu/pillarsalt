"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/IMG-20230417-WA0010 1.png";
import { useRouter } from "next/navigation";
import errorIcon from "../../../public/Vector.png";
import close from "../../../public/Close.png";
import ButtonComponent from "@/components/shared/ButtonComponent";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password);

    // Simulated login check
    if (email === "odunayo@gmail.com" && password === "password") {
      // Redirect to the next step if login is successful
      // For now, let's just log a success message
      console.log("Login successful!");
      router.push("/dashboard");
    } else {
      // Display error message if login fails
      setShowError(true);
      return;
    }
  };

  const handleCloseError = () => {
    setShowError(false);
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
          <div className="border border-red-500 bg-red-100 font-light my-10 text-[13px] px-4 py-3 rounded relative flex">
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
              Email
            </label>
            <div>
              <input
                className="border rounded-lg border-black p-2 w-full"
                type="email"
                id="email"
                placeholder="Enter your mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="font-bold">
              Confirm Password
            </label>
            <div>
              <input
                className="border rounded-lg border-black p-2 w-full"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Forgot Password */}
          <div className="text-[#056839] font-bold">
            <a href="/setpassword" id="forgot-password">
              Forget Password?
            </a>
          </div>
        </div>

        {/* Next Button */}
        <div>
          <ButtonComponent
            title="Next"
            onClick={() => console.log("clicked")}
            className=""
            withIcon
            icon={
              <ArrowRightIcon className="group-hover:scale-115 group-hover:translate-x-2 transition-all  opacity-0 group-hover:opacity-100" />
            }
          />
        </div>
      </form>
    </div>
  );
}
