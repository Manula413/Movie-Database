import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-[#C8E8C8]">
      <h1 className="text-6xl font-bold drop-shadow-md">404</h1>
      <p className="text-xl mt-4 opacity-80">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#C8E8C8] text-[#030712] font-semibold rounded-lg hover:bg-[#a8d3a8] transition"
      >
        Go Home
      </Link>
    </div>
  );
}
