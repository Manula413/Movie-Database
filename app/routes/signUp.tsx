import { useState } from "react";
import { Lock, User, AtSign } from "lucide-react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && username && password && confirmPassword && password === confirmPassword) {
      // Handle sign up logic here
      console.log("Signing up...");
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
          <p className="text-[#C8E8C8] mt-2">Create a new account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="text-[#C8E8C8] font-medium text-lg">Username</label>
            <div className="flex items-center mt-2 bg-[#212525] p-2 rounded-md border border-[#4a4a4a] focus-within:border-[#7FEE64]">
              <User className="w-5 h-5 text-[#C8E8C8]" />
              <input
                type="text"
                id="username"
                className="bg-transparent text-[#C8E8C8] placeholder-[#A1A1A1] focus:outline-none flex-1 pl-3"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-[#C8E8C8] font-medium text-lg">Email Address</label>
            <div className="flex items-center mt-2 bg-[#212525] p-2 rounded-md border border-[#4a4a4a] focus-within:border-[#7FEE64]">
              <AtSign className="w-5 h-5 text-[#C8E8C8]" />
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

          <div className="mb-4">
            <label htmlFor="password" className="text-[#C8E8C8] font-medium text-lg">Password</label>
            <div className="flex items-center mt-2 bg-[#212525] p-2 rounded-md border border-[#4a4a4a] focus-within:border-[#7FEE64]">
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

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="text-[#C8E8C8] font-medium text-lg">Confirm Password</label>
            <div className="flex items-center mt-2 bg-[#212525] p-2 rounded-md border border-[#4a4a4a] focus-within:border-[#7FEE64]">
              <Lock className="w-5 h-5 text-[#C8E8C8]" />
              <input
                type="password"
                id="confirmPassword"
                className="bg-transparent text-[#C8E8C8] placeholder-[#A1A1A1] focus:outline-none flex-1 pl-3"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Error Message */}
          {!isFormValid && <p className="text-red-500 mb-4 text-center">All fields are required and passwords must match.</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#7FEE64] text-black font-bold rounded-lg hover:bg-[#2980b9] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-[#C8E8C8]">Already have an account?</p>
          <a href="login" className="text-[#7FEE64] hover:underline transition duration-300">
            Log in here
          </a>
        </div>
      </div>
    </div>
  );
}
