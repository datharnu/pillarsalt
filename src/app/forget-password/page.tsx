"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/IMG-20230417-WA0010 1.png";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/components/shared/ButtonComponent";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import BarChart from "../../../public/Bar Chart.png";
import ReCAPTCHA from "react-google-recaptcha";
export default function ForgetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);

    // Simulated login check
    if (email === "joshua@gmail.com") {
      // Redirect to the next step if login is successful
      // For now, let's just log a success message
      console.log("Login successful!");
      router.push("/forget-password/verify-email");
    } else {
      // Display error message if login fails
      {
        ("Your email address is not valid. Please try again.");
      }
      return;
    }
  };
  return (
    <section className="lg:flex">
      {/* Continue Your journey  */}
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

      {/* Right side on Desktop */}
      <div className=" flex justify-center lg:w-[56%] ">
        <div className="mx-5  lg:my-28 md:w-[75%]   ">
          {/* Logo */}
          <div className="my-10 -ml-3">
            <Image src={Logo} alt="Logo" height={60} priority />
          </div>

          {/* Forget Password */}
          <div>
            <h1 className="text-[34px] font-semibold">Forget Password?</h1>
            <p className="text-[#00000099] font-light ">
              please input your email below
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="my-10 text-sm">
            {/* Email Input */}

            <div className="space-y-5 mb-[18rem] lg:mb-20   ">
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
                <ReCAPTCHA sitekey="6LfOz6cpAAAAAPlkxkG-NMCMM2yD6SfGeHrA1KYt" />
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
