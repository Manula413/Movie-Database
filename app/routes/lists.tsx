import { useState } from "react";
import { Search } from "lucide-react";
import SearchBar from "../components/searchbar";
import FilterOptions from "../components/filter";

interface Movie {
  title: string;
  poster: string;
  year: number;
  type: string;
  genre: string;
  rating: string;
  userRating?: number;
}

const watchLater: Movie[] = [
    { title: "TOP GUN: Maverick", poster: "/posters/poster1.jpg", year: 2010, type: "Movie", rating: "4.6", genre: "Action" },
    { title: "Spiderman: Into the Spider-Verse", poster: "/posters/poster2.jpg", year: 2010, type: "Movie", rating: "4.6", genre: "Action" },
  ];
  
  const titles = [
    "The Shawshank Redemption", "The Godfather", "The Dark Knight", "12 Angry Men", "Schindler's List",
    "The Lord of the Rings: The Return of the King", "Pulp Fiction", "The Good, the Bad and the Ugly", "The Lion King", "Forrest Gump",
    "Inception", "Fight Club", "The Matrix", "Goodfellas", "One Flew Over the Cuckoo's Nest",
    "Seven Samurai", "City of God", "The Silence of the Lambs", "It's a Wonderful Life", "Life Is Beautiful",
    "The Usual Suspects", "Léon: The Professional", "Saving Private Ryan", "Spirited Away", "American History X",
    "Interstellar", "The Green Mile", "Se7en", "Terminator 2: Judgment Day", "Back to the Future",
    "The Pianist", "Modern Times", "Casablanca", "Whiplash", "Memento",
    "The Prestige", "The Departed", "Children of Men", "Inglourious Basterds", "WALL-E",
    "Oldboy", "Amélie", "A Clockwork Orange", "Eternal Sunshine of the Spotless Mind", "Requiem for a Dream",
    "Trainspotting", "No Country for Old Men", "There Will Be Blood", "The Social Network", "Black Swan",
    "Parasite", "Joker", "1917", "The Irishman", "Marriage Story",
    "Nomadland", "Everything Everywhere All at Once", "Oppenheimer", "Killers of the Flower Moon", "Past Lives",
    "Anatomy of a Fall", "The Holdovers", "Poor Things", "Spider-Man: Across the Spider-Verse" // Included this one
  ];
  
  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"];
  const types = ["Movie", "TV Series"];
  
  for (let i = 0; i < 50; i++) {
      const movie: Movie = {
          title: titles[Math.floor(Math.random() * titles.length)],
          poster: `/posters/poster${Math.floor(Math.random() * 5) + 1}.jpg`, // Random poster 1-5
          year: Math.floor(Math.random() * (2024 - 1990 + 1)) + 1990, // Random year between 1990 and 2024
          type: types[Math.floor(Math.random() * types.length)],
          genre: genres[Math.floor(Math.random() * genres.length)],
          rating: (Math.random() * (5 - 1) + 1).toFixed(1), // Random rating between 1 and 5
      };
      watchLater.push(movie);
  }

const watched: Movie[] = [
  { title: "Batman V Superman", poster: "/posters/poster4.jpg", year: 2010, type: "Movie", rating: "4.6", genre: "Action", userRating: 4 },
  { title: "Red Notice", poster: "/posters/poster5.jpg",year: 2010, type: "Movie", rating: "4.6", genre: "Action", userRating: 5 },
];

export default function ListsPage() {
    const [activeList, setActiveList] = useState("watchLater");
    const [showThumbnails, setShowThumbnails] = useState(false);
    const movieList = activeList === "watchLater" ? watchLater : watched;
  
    return (
      <div className="min-h-screen text-[#C8E8C8] font-rubik p-6 md:px-16 bg-cover bg-fixed" >
        <SearchBar searchTerm="" setSearchTerm={() => {}} />
        <FilterOptions />
       
  
        <div className="w-full max-w-screen-xl mx-auto px-6">
     
          {/* Tabs for Lists */}
          <div className="flex space-x-4 mt-6 border-b border-[#C8E8C8] pb-2">
            
            <button className={`px-4 py-2 ${activeList === "watched" ? "border-b-2 border-[#C8E8C8]" : ""}`} onClick={() => setActiveList("watched")}>
              Watched
            </button>
            <button className={`px-4 py-2 ${activeList === "watchLater" ? "border-b-2 border-[#C8E8C8]" : ""}`} onClick={() => setActiveList("watchLater")}>
              Watch Later
            </button>
          </div>
  
          {/* Thumbnail Toggle */}
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="thumbnailToggle" checked={showThumbnails} onChange={() => setShowThumbnails(!showThumbnails)} className="mr-2" />
            <label htmlFor="thumbnailToggle">Show Thumbnails</label>
          </div>
  
          {/* Movies Table */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border border-[#C8E8C8]">
              <thead>
                <tr className="bg-[#212525] text-center">
                  {showThumbnails && <th className="p-2 border border-[#C8E8C8]">Thumbnail</th>}
                  <th className="p-2 border border-[#C8E8C8] w-[40%]">Title</th>
                  <th className="p-2 border border-[#C8E8C8]">Year</th>
                  <th className="p-2 border border-[#C8E8C8]">Type</th>
                  <th className="p-2 border border-[#C8E8C8]">Genre</th>
                  <th className="p-2 border border-[#C8E8C8]">Rating</th>
                  {activeList === "watched" && <th className="p-2 border border-[#C8E8C8]">Your Rating</th>}
                </tr>
              </thead>
              <tbody>
                {movieList.map((movie, index) => (
                  <tr key={index} className="hover:bg-[#272727] text-center">
                    {showThumbnails && (
                      <td className="p-2 border border-[#C8E8C8]">
                        <img src={movie.poster} alt={movie.title} className="w-12 h-16 object-cover mx-auto" />
                      </td>
                    )}
                    <td className="p-2 border border-[#C8E8C8] text-left">{movie.title}</td>
                    <td className="p-2 border border-[#C8E8C8]">{movie.year}</td>
                    <td className="p-2 border border-[#C8E8C8]">{movie.type}</td>
                    <td className="p-2 border border-[#C8E8C8]">{movie.genre}</td>
                    <td className="p-2 border border-[#C8E8C8]">⭐ {movie.rating}</td>
                    {activeList === "watched" && <td className="p-2 border border-[#C8E8C8]">{movie.userRating}/5</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  