import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigateTo = useNavigate();
  const [formData, setFormdata] = useState({
    email: "",
  });
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setError("Valid email required");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      validateEmail(value);
    }
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigateTo(`/success?email=${encodeURIComponent(formData.email)}`);
  };
  return (
    <div>
      <form action="">
        <div className="flex flex-col mx-auto justify-center p-4">
          <label
            htmlFor=""
            className="py-2 font-bold text-sm text-[#242742] flex justify-between items-center"
          >
            Email address
            {error && <p className="text-[#FF6257] text-sm">{error}</p>}
          </label>

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@company.com"
            className={`p-4 mb-6 border focus:outline-none rounded-md ${
              error
                ? "focus:border-[#FF6257] focus:text-[#FF6257] focus:bg-[#FFE7E5] focus:font-bold"
                : "border-[#9294A0]"
            }`}
            required
          />
          <button
            className="rounded-md text-white bg-[#242742] w-[100%] p-4 hover:bg-gradient-to-r from-[#ef3426] to-[#FF6257]"
            onClick={handleSubmit}
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </div>
  );
}
