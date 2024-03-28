"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/IMG-20230417-WA0010 1.png";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/components/shared/ButtonComponent";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import BarChart from "../../../public/Bar Chart.png";

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [captchaToken, setCaptchaToken] = useState(""); // State to store the reCAPTCHA token

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);

    // Verify the reCAPTCHA token
    if (!captchaToken) {
      console.error("reCAPTCHA token is required");
      return;
    }

    // Your form submission logic here
    // Use the captchaToken to verify the user's response with Google

    // Simulated login check
    if (email === "joshua@gmail.com") {
      // Redirect to the next step if login is successful
      // For now, let's just log a success message
      console.log("Login successful!");
      router.push("/dashboard");
    } else {
      // Display error message if login fails
      console.log("Your email address is not valid. Please try again.");
      return;
    }
  };

  // Function to handle reCAPTCHA token expiration
  const handleExpiredCaptcha = () => {
    console.log("reCAPTCHA token expired");
    setCaptchaToken("");
  };

  // Function to handle reCAPTCHA token change
  const handleCaptchaChange = (token: React.SetStateAction<string>) => {
    console.log("reCAPTCHA token:", token);
    setCaptchaToken(token);
  };

  return (
    <section className="lg:flex">
      {/* Continue Your journey  */}
      {/* Omitted for brevity */}

      {/* Right side on Desktop */}
      <div className=" flex justify-center lg:w-[56%] ">
        <div className="mx-5  lg:my-28 md:w-[75%]   ">
          {/* Logo */}
          {/* Omitted for brevity */}

          {/* Forget Password */}
          {/* Omitted for brevity */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="my-10 text-sm">
            {/* Email Input */}
            {/* Omitted for brevity */}

            {/* Google reCAPTCHA */}
            <div
              className="g-recaptcha"
              data-sitekey="YOUR_SITE_KEY"
              data-callback="handleCaptchaChange"
              data-expired-callback="handleExpiredCaptcha"
            ></div>

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
