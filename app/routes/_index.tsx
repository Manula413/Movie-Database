import { Search, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import MovieCard from "./moviecard";
import { Heart, Plus, Check, X } from "lucide-react"; 
import SearchBar from "../components/searchbar";
import FilterOptions from "../components/filter";


interface Movie {
  title: string;
  poster: string;
  rating: string;
  genre: string;
}

const movies: Movie[] = [
  { title: "TOP GUN: Maverick", poster: "/posters/poster1.jpg", rating: "4.6", genre: "Action" },
  { title: "Spiderman: Into the Spider-Verse", poster: "/posters/poster2.jpg", rating: "4.6", genre: "Action" },
  { title: "Black Panther: Wakanda Forever", poster: "/posters/poster3.jpg", rating: "4.6", genre: "Action" },
  { title: "Batman V Superman", poster: "/posters/poster4.jpg", rating: "4.6", genre: "Action" },
  { title: "Red Notice", poster: "/posters/poster5.jpg", rating: "4.6", genre: "Action" },
  { title: "TOP GUN: Maverick", poster: "/posters/poster1.jpg", rating: "4.6", genre: "Action" },
  { title: "Spiderman: Into the Spider-Verse", poster: "/posters/poster2.jpg", rating: "4.6", genre: "Action" },
  { title: "Black Panther: Wakanda Forever", poster: "/posters/poster3.jpg", rating: "4.6", genre: "Action" },
  { title: "Batman V Superman", poster: "/posters/poster4.jpg", rating: "4.6", genre: "Action" },
  { title: "Red Notice", poster: "/posters/poster5.jpg", rating: "4.6", genre: "Action" }
];

export default function IndexPage() {
  const [searchTerm, setSearchTerm] = useState(""); // Move state here
  const trendingRef = useRef<HTMLDivElement>(null);
  const watchNextRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen   text-[#C8E8C8] font-rubik p-6 md:px-16 overflow-hidden">
         <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterOptions />

      {/* Conditionally Render MovieCard */}
      {searchTerm && (
        <div className="mt-6">
          <MovieCard />
        </div>
      )}

      {/* Movie Sections */}
      {[
        { title: "Trending Movies", ref: trendingRef },
        { title: "Watch Next", ref: watchNextRef }
      ].map((section, index) => (
        <div key={index} className="mt-12"> {/* Increased spacing */}
          <h2 className="text-xl font-bold mb-4 pb-2 ">{section.title}</h2>

          {/* Box Wrapper for Carousel */}
          <div className="text-[#C8E8C8] rounded-xl p-4 relative">
            {/* Carousel */}
            <div
              ref={section.ref}
              className="flex overflow-x-hidden overflow-y-hidden scrollbar-hide space-x-4 p-2 no-scrollbar snap-x snap-mandatory"
            >
              {movies.map((movie, i) => (
                <div
                  key={i}
                  className="min-w-[280px] max-w-[280px] rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C8E8C8]/20 overflow-hidden snap-start relative"
                >
                  {/* Heart Icon */}
                  <button className="absolute top-2 right-2 bg-black/60 p-2 rounded-full hover:bg-black/80 transition">
                    <Heart className="text-[#C8E8C8]  w-5 h-5" />
                  </button>

                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-[360px] object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h3 className="font-bold text-sm truncate">{movie.title}</h3>
                    <p className="text-xs flex items-center mt-1">
                      ⭐ {movie.rating} | {movie.genre} • Movie
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#272727] p-3 rounded-full shadow-md transition-opacity opacity-0 hover:opacity-100"
              onClick={() => scroll(section.ref, -1)}
            >
              <ChevronRight className="rotate-180 text-[#C8E8C8]" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#272727] p-3 rounded-full shadow-md transition-opacity opacity-0 hover:opacity-100"
              onClick={() => scroll(section.ref, 1)}
            >
              <ChevronRight className="text-[#C8E8C8]" />
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}
