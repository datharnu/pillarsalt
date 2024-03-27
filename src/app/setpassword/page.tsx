/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/IMG-20230417-WA0010 1.png";
import Arrow from "../../../public/Arrow.png";
import errorIcon from "../../../public/Vector.png";
import { Button } from "@nextui-org/react";

export default function SetPassword() {
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
    <main className="mx-5">
      <div className="">
        {/* Logo */}
        <div className="my-10 -ml-3">
          <Image src={Logo} alt="Logo" height={60} priority />
        </div>

        {/* Welcome message */}
        <div className="">
          <h1 className="text-[30px] font-semibold">Welcome,</h1>
          <p className="text-[#00000099] font-light ">
            Complete your account set up by providing a password
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="my-10  text-sm">
          {/* Password Input */}
          <div className="space-y-5 mb-[18rem]">
            <div className="space-y-2">
              <label htmlFor="password" className="font-bold">
                Password
              </label>
              <div className="">
                <input
                  className="w-full border rounded-lg border-black p-2"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChangePassword}
                  onFocus={() => setShowPasswordRequirements(true)}
                  required
                />
                {/* Display password requirement error message */}
                {showPasswordRequirements && (
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
                Confirm Password
              </label>
              <div className=" ">
                <input
                  className="border rounded-lg border-black p-2 w-full "
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
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
            <div className="flex justify-center ">
              <Button
                type="submit"
                className="bg-gray-100 text-gray-400 rounded-lg p-3 w-full"
              >
                <a
                  href="/login"
                  id="forgot-password"
                  className="flex items-center gap-2"
                >
                  <p>Next</p>
                  <Image src={Arrow} alt="arrow" />
                </a>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
