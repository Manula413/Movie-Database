import { useEffect, useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./routes/NotFound";

import "@fontsource/rubik";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/400.css";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signUp";

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/bg1.webp";
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen w-full relative">
        <div
          id="bg-image"
          className={`absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center transition-all duration-500 pointer-events-none ${isImageLoaded ? "filter-blur-10" : ""}`}
          style={{
            backgroundImage: "url('/bg1.webp')",  // Always apply the background image
            backgroundColor: !isImageLoaded ? "rgba(3, 7, 18, 0.9)" : "transparent",
            backgroundAttachment: "fixed",
          }}
        ></div>
        {/* Hide header and footer only on login and signup pages */}
        {!isAuthPage && (
          <div className="w-full relative z-50">
            <Header />
          </div>
        )}
        <div className="flex flex-col flex-1 w-full z-10">
          <main className="flex-1">{children}</main>
          {!isAuthPage && <Footer />}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}


export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-[#C8E8C8]">
      <h1 className="text-6xl font-bold drop-shadow-md">Something went wrong</h1>
      <p className="text-xl mt-4 opacity-80">
        {error instanceof Error ? error.message : "An unexpected error occurred."}
      </p>
    </div>
  );
}

export default function App() {
  return <Outlet />;
}