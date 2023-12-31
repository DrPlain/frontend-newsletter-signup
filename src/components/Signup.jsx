import SignupForm from "./SignupForm";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Signup() {
  return (
    <div className="h-screen mx-auto text-[16px] md:bg-[#36384E] md:flex md:items-center">
      <div className="flex items-center justify-center xl:w-[70%] lg:w-[80%] md:w-[95%] md:mx-auto md:rounded-3xl md:bg-white">
        <div className="md:pl-8 lg:px-8 md:py-8">
          <div>
            <div className="md:hidden">
              <img src={mobileImage} alt="" className="w-full" />
            </div>
            <div className="px-4">
              <h1 className="font-roboto font-bold text-4xl lg:text-5xl py-4 text-[#242742]">
                Stay updated!
              </h1>
              <p className="py-2 text-[#36384E]">
                Join 60,000+ product managers receiving monthly updates on:{" "}
                <br />
              </p>
              <ul className="text-[#36384E]">
                <li className="flex py-2">
                  <BsCheckCircleFill
                    size={25}
                    className="pt-1 text-[#FF6257]"
                  />
                  <p className="px-3">
                    Product discovery and building what matters
                  </p>
                </li>
                <li className="flex py-2">
                  <BsCheckCircleFill
                    size={25}
                    className="pt-1 text-[#FF6257]"
                  />
                  <p className="px-3">
                    Measuring to ensure updates are a success
                  </p>
                </li>
                <li className="flex py-2">
                  <BsCheckCircleFill
                    size={25}
                    className="pt-1 text-[#FF6257]"
                  />
                  <p className="px-3">And much more!</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <SignupForm />
          </div>
        </div>
        <div className="hidden md:flex md:p-4 lg:py-8">
          <img src={desktopImage} alt="" />
        </div>
      </div>
    </div>
  );
}
