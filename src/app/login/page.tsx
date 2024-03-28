"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/IMG-20230417-WA0010 1.png";
import { useRouter } from "next/navigation";
import errorIcon from "../../../public/Vector.png";
import close from "../../../public/Close.png";
import ButtonComponent from "@/components/shared/ButtonComponent";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import BarChart from "../../../public/Bar Chart.png";
import Barchart2 from "../../../public/Card.svg";
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
    <section className="flex">
      {/* Continue Your journey  */}
      <div className=" lg:bg-bgImg bg-no-repeat bg-cover text-white  w-[44%] sm:hidden h-[100vh]">
        <div className="my-40 space-y-20 lg:ml-10  flex flex-col place-items-end ">
          <div className="space-y-16">
            <h1 className="text-[40px] leading-none font-semibold  ">
              Continue Your Journey <br /> with us.
            </h1>

            <div className="bg-white rounded-l-xl flex py-12 justify-between ">
              <div className="text-black text-xs   space-y-3 ml-12 mt-9 w-1/4  ">
                <p className="font-semibold text-lg">Revenue</p>
                <p className="text-lg">$2,750,000</p>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <p className="text-lg">$3,489</p>
                <p className="text-gray-400 text-sm">Total Transaction</p>
              </div>

              <div className="max-w-[100%]">
                <Image
                  src={BarChart}
                  width={400}
                  alt="Bar Chart"
                  priority
                  className=" "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side on Desktop */}
      <div className=" flex justify-center lg:w-[56%]">
        <div className="mx-5  lg:my-28  ">
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
            <div className="space-y-5 sm:mb-[18rem] lg:mb-20 ">
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
      </div>
    </section>
  );
}
