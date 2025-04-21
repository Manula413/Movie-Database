import { Heart } from "lucide-react";
import SearchBar from "../components/searchbar";
import FilterOptions from "../components/filter";
import { useState } from "react";

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
  { title: "Red Notice", poster: "/posters/poster5.jpg", rating: "4.6", genre: "Action" },
  { title: "TOP GUN: Maverick", poster: "/posters/poster1.jpg", rating: "4.6", genre: "Action" },
  { title: "Spiderman: Into the Spider-Verse", poster: "/posters/poster2.jpg", rating: "4.6", genre: "Action" },
  { title: "Black Panther: Wakanda Forever", poster: "/posters/poster3.jpg", rating: "4.6", genre: "Action" },
  { title: "Batman V Superman", poster: "/posters/poster4.jpg", rating: "4.6", genre: "Action" },
  { title: "Red Notice", poster: "/posters/poster5.jpg", rating: "4.6", genre: "Action" },
  { title: "TOP GUN: Maverick", poster: "/posters/poster1.jpg", rating: "4.6", genre: "Action" },
  { title: "Spiderman: Into the Spider-Verse", poster: "/posters/poster2.jpg", rating: "4.6", genre: "Action" },
  { title: "Black Panther: Wakanda Forever", poster: "/posters/poster3.jpg", rating: "4.6", genre: "Action" },
  { title: "Batman V Superman", poster: "/posters/poster4.jpg", rating: "4.6", genre: "Action" },
  { title: "Red Notice", poster: "/posters/poster5.jpg", rating: "4.6", genre: "Action" },
  { title: "TOP GUN: Maverick", poster: "/posters/poster1.jpg", rating: "4.6", genre: "Action" },
  { title: "Spiderman: Into the Spider-Verse", poster: "/posters/poster2.jpg", rating: "4.6", genre: "Action" },
  { title: "Black Panther: Wakanda Forever", poster: "/posters/poster3.jpg", rating: "4.6", genre: "Action" },
  { title: "Batman V Superman", poster: "/posters/poster4.jpg", rating: "4.6", genre: "Action" },
  { title: "Red Notice", poster: "/posters/poster5.jpg", rating: "4.6", genre: "Action" },
  { title: "TOP GUN: Maverick", poster: "/posters/poster1.jpg", rating: "4.6", genre: "Action" },
  { title: "Spiderman: Into the Spider-Verse", poster: "/posters/poster2.jpg", rating: "4.6", genre: "Action" },
  { title: "Black Panther: Wakanda Forever", poster: "/posters/poster3.jpg", rating: "4.6", genre: "Action" },
  { title: "Batman V Superman", poster: "/posters/poster4.jpg", rating: "4.6", genre: "Action" },
  { title: "Red Notice", poster: "/posters/poster5.jpg", rating: "4.6", genre: "Action" },
];

export default function MoviesPage() {
    const moviesPerPage = 20; // Adjust as needed
    const totalMovies = movies.length; // Assuming `movies` is available
    const totalPages = Math.ceil(totalMovies / moviesPerPage);
    const [searchTerm, setSearchTerm] = useState(""); // Move state here

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const paginatedMovies = movies.slice(
        (currentPage - 1) * moviesPerPage,
        currentPage * moviesPerPage
    );

    return (
        <div className="min-h-screen text-[#C8E8C8] font-rubik px-6 md:px-24 lg:px-32 xl:px-48 py-6 overflow-hidden">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterOptions /> {/* Increased space below FilterOptions */}

            {/* Box container to add more space on the sides */}
            <div className="w-full max-w-screen-xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-6">All Movies</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 justify-center">
                    {paginatedMovies.map((movie, i) => (
                        <div
                            key={i}
                            className="w-[220px] h-[360px] rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C8E8C8]/20 overflow-hidden relative"
                        >
                            {/* Heart Icon */}
                            <button className="absolute top-2 right-2 bg-black/60 p-1 rounded-full hover:bg-black/80 transition">
                                <Heart className="text-[#C8E8C8] w-4 h-4" />
                            </button>

                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full h-[300px] object-cover"
                            />
                            <div className="p-2">
                                <h3 className="font-bold text-xs truncate">{movie.title}</h3>
                                <p className="text-[10px] flex items-center mt-1">
                                    ⭐ {movie.rating} | {movie.genre} • Movie
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${currentPage === 1
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-[#C8E8C8] hover:bg-[#272727] transition"
                    }`}
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 rounded ${currentPage === i + 1
                            ? "bg-[#C8E8C8] text-black"
                            : "text-[#C8E8C8] hover:bg-[#272727] transition"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${currentPage === totalPages
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-[#C8E8C8] hover:bg-[#272727] transition"
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

