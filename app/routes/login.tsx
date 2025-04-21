import { useState } from "react";
import { Lock, User } from "lucide-react";
import { useNavigate } from "@remix-run/react"; // Import useNavigate from Remix

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // No backend logic, just navigate to home page
      navigate("/"); // You can adjust the route based on your project
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-[#212525] bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-[#C8E8C8]">MOVIES</h1>
          <p className="text-[#C8E8C8] mt-2">Log in to access your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-[#C8E8C8] font-medium text-lg">Email Address</label>
            <div className="flex items-center mt-2 bg-[#212525] p-2 rounded-md border border-[#4a4a4a] focus-within:border-[#3498db]">
              <User className="w-5 h-5 text-[#C8E8C8]" />
              <input
                type="email"
                id="email"
                className="bg-transparent text-[#C8E8C8] placeholder-[#A1A1A1] focus:outline-none flex-1 pl-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="text-[#C8E8C8] font-medium text-lg">Password</label>
            <div className="flex items-center mt-2 bg-[#212525] p-2 rounded-md border border-[#4a4a4a] focus-within:border-[#3498db]">
              <Lock className="w-5 h-5 text-[#C8E8C8]" />
              <input
                type="password"
                id="password"
                className="bg-transparent text-[#C8E8C8] placeholder-[#A1A1A1] focus:outline-none flex-1 pl-3"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Error Message */}
          {!isFormValid && <p className="text-red-500 mb-4 text-center">Both fields are required.</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#7FEE64] text-black font-bold rounded-lg hover:bg-[#2980b9] transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
          <a href="#" className="text-[#C8E8C8] hover:text-white transition duration-300">
            Forgot your password?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-[#C8E8C8]">Don't have an account?</p>
          <a href="signUp" className="text-[#7FEE64] hover:underline transition duration-300">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  );
}
