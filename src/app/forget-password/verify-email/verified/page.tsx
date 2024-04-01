/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../../../public/IMG-20230417-WA0010 1.png";
import BarChart from "../../../../../public/Bar Chart.png";
import errorIcon from "../../../../../public/Vector.png";

import ButtonComponent from "@/components/shared/ButtonComponent";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { ChevronLeft } from "lucide-react";

export default function Verified() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState([
    {
      text: "Your password must contain at least 8 characters.",
      isValid: false,
    },
    {
      text: "At least 1 Uppercase character (A-Z)",
      isValid: false,
    },
    {
      text: "At least 1 Digit (0-9)",
      isValid: false,
    },
    {
      text: "At least 1 Special characters (~!@#$...)",
      isValid: false,
    },
  ]);
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    // Proceed with form submission logic
    console.log(confirmPassword, password);

    // Simulated login check
    if (password === "Airtel8097!" && confirmPassword === "Airtel8097!") {
      // Redirect to the next step if login is successful
      // For now, let's just log a success message
      router.push("/login");
      console.log("Login successful!");
    } else {
      // Display error message if login fails
      setPasswordsMatch(true);
      return;
    }
  };

  const handleChangePassword = (e: { target: { value: any } }) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    // Define regular expressions for each requirement
    const regexArr = [
      /^(?=.{8,}$)/,
      /^(?=.*[A-Z])/,
      /^(?=.*\d)/,
      /^(?=.*[@$!%*?&])/,
    ];

    // Update password requirements state based on validation status
    setPasswordRequirements(
      passwordRequirements.map((requirement, index) => ({
        ...requirement,
        isValid: regexArr[index].test(enteredPassword),
      }))
    );
  };

  return (
    <section className="lg:flex">
      <div className=" lg:bg-bgImg bg-no-repeat bg-cover text-white  w-[44%] sm:hidden md:hidden h-[100vh]">
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

      {/* Right Side on Desktop */}
      <div className="flex justify-center lg:w-[56%]   ">
        <div className="sm:mx-5  lg:my-28  md:w-[75%] min-w-[40%] ">
          {/* Logo */}
          <div className="my-10 -ml-3">
            <Image src={Logo} alt="Logo" height={60} priority />
          </div>

          {/* Welcome message */}
          <div className="">
            <h1 className="text-[30px] font-semibold">Verified!</h1>
            <p className="text-[#00000099] font-light ">
              You can now set a new password
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="my-10  text-sm">
            {/* Password Input */}
            <div className="space-y-5 mb-[18rem] lg:mb-20 ">
              <div className="space-y-2">
                <label htmlFor="password" className="font-bold">
                  New Password
                </label>
                <div className="">
                  <input
                    className="w-full border rounded-lg border-black p-2"
                    type="password"
                    id="password"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={handleChangePassword}
                    onFocus={() => setShowPasswordRequirements(true)}
                    required
                  />
                  {/* Display password requirement error message */}
                  {showPasswordRequirements &&
                    !passwordRequirements.every((req) => req.isValid) && (
                      <div className="flex my-2">
                        {/* Error Icon */}
                        <div className="mr-2">
                          <Image src={errorIcon} alt="error-icon" width={25} />
                        </div>
                        {/* Password Requirements */}
                        <div>
                          {passwordRequirements.map((requirement, index) => (
                            <div key={index} className="">
                              <ul
                                className={`text-[13px] ${
                                  requirement.isValid
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                              >
                                <li>{requirement.text}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="font-bold">
                  Confirm New Password
                </label>
                <div className="">
                  <input
                    className="border rounded-lg border-black p-2 w-full "
                    type="password"
                    id="confirm-password"
                    placeholder="Enter password again"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {/* Display password match error message */}
                  {!passwordsMatch && (
                    <p className="text-red-400 text-sm mt-2">
                      Password doesn't match
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div>
              <ButtonComponent
                onClick={() => {}}
                title="Next"
                className=""
                withIcon
                icon={
                  <ArrowRightIcon className="group-hover:scale-115 group-hover:translate-x-2 transition-all  opacity-0 group-hover:opacity-100 " />
                }
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
