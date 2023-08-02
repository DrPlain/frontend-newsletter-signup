import { BsCheckCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom/dist";
import { useNavigate } from "react-router-dom/dist";

export default function Success() {
  // useLocation gives the current URL in a functional component
  // The search attribute gives the query string of the URL
  // URLSeachParams parses a query string to an object
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo("/");
  };

  return (
    <div className="h-screen text-[16px] bg-[#36384E] pt-10 flex items-center">
      <div className="flex items-center justify-center w-[350px] md:w-[400px] h-[auto] mx-auto rounded-3xl bg-white">
        <div className="px-8 py-4">
          <BsCheckCircleFill size={55} className="text-[#FF6257] mb-4 mt-4" />
          <h1 className="text-4xl font-bold py-4">Thanks for Subscribing!</h1>
          <p className="pb-6 text-sm">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
          <button
            className="rounded-md text-white bg-[#242742] w-[100%] p-4 mb-8"
            onClick={handleClick}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}
