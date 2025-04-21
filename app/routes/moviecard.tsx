import React, { useState, useRef, useEffect } from "react";
import { Heart, Plus, Check, X } from "lucide-react"; // Added Check & X icons

const MovieCard = () => {
    const [isWatchLater, setIsWatchLater] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [newList, setNewList] = useState("");
    const [showNewListInput, setShowNewListInput] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false);
                setShowNewListInput(false);
                setNewList("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="p-6 rounded-2xl flex flex-col md:flex-row gap-6 max-w-5xl mx-auto relative">
            {/* Movie Poster */}
            <img
                src="/posters/poster1.jpg"
                alt="Top Gun: Maverick"
                className="w-full md:w-2/5 rounded-xl object-cover"
            />

            {/* Movie Details */}
            <div className="flex-1 text-[#C8E8C8] flex flex-col justify-between">
                <div>
                    {/* Title & Year */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-[#C8E8C8]">Flight Risk</h1>
                            <p className="text-gray-400 text-sm mt-1">2022 · Movie</p>
                        </div>

                        {/* Watch Later & Add to List Buttons */}
                        <div className="flex gap-3">
                            <button
                                className={`p-2 border-2 rounded-full transition-transform transform hover:scale-105 ${isWatchLater
                                    ? "text-[#C8E8C8] fill-[#C8E8C8]"
                                    : "text-gray-400"
                                    }`}
                                onClick={() => setIsWatchLater(!isWatchLater)}
                            >
                                <Heart
                                    className={`w-6 h-6 ${isWatchLater
                                        ? "text-[#C8E8C8] fill-[#C8E8C8]"
                                        : "text-gray-400"
                                        }`}
                                />
                            </button>

                            <button
                                className="p-2 border-2 border-gray-400 rounded-full transition-transform transform hover:scale-105 hover:border-white"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                <Plus className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>
                    </div>
                    {/* Transparent Dropdown Menu */}
                    {showDropdown && (
                        <div
                            ref={dropdownRef}
                            className="absolute right-6 top-20 bg-transparent border border-gray-400 backdrop-blur-md text-white p-3 w-48 rounded-lg"
                        >
                            <button
                                className="block w-full text-left px-3 py-2 text-[#C8E8C8] hover:bg-gray-700 rounded"
                                onClick={() => {
                                    setIsWatchLater(true);
                                    setShowDropdown(false);
                                }}
                            >
                                Watch Later
                            </button>

                            <button className="block w-full text-left px-3 py-2 text-[#C8E8C8] hover:bg-gray-700 rounded">
                                Watched
                            </button>
                            <button
                                className="block w-full text-left px-3 py-2 text-[#C8E8C8] hover:bg-gray-700 rounded"
                                onClick={() => setShowNewListInput(true)} // This makes the input field appear
                            >
                                Create New List
                            </button>

                            {showNewListInput && (
                                <div className="flex items-center gap-2 mt-2 p-2 border border-gray-600 rounded-md">
                                    <input
                                        type="text"
                                        className="flex-1 bg-transparent text-white border-none focus:ring-0 focus:outline-none"
                                        placeholder="List name"
                                        value={newList}
                                        onChange={(e) => setNewList(e.target.value)}
                                    />
                                    <button
                                        onClick={() => {
                                            setShowNewListInput(false);
                                            setNewList("");
                                        }}
                                    >
                                        <X className="w-5 h-5 text-gray-400 hover:text-red-500" />
                                    </button>
                                    <button
                                        disabled={!newList.trim()}
                                        onClick={() => {
                                            console.log("New List Created:", newList);
                                            setShowNewListInput(false);
                                            setNewList("");
                                        }}
                                    >
                                        <Check className="w-5 h-5 text-gray-400 hover:text-green-500" />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Genre Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["Action", "Adventure", "Drama"].map((genre, index) => (
                            <span
                                key={index}
                                className="bg-[#272727] px-3 py-1 text-sm rounded-full text-gray-300"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>

                    {/* Story Line */}
                    <h2 className="text-lg font-semibold mt-4 text-[#C8E8C8]">
                        Story Line
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Set 30 years after its predecessor, it follows Maverick's return to
                        the United States Navy Strike Fighter Tactics Instructor program,
                        where he must confront his past as he trains a group of younger
                        pilots, among them the son of his deceased best friend.
                    </p>

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                        <div>
                            <p className="text-gray-400">Director:</p>
                            <p className="font-medium">Joseph Kosinski</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Writer:</p>
                            <p className="font-medium">Ehren Kruger</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Runtime:</p>
                            <p className="font-medium">131 min</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Language:</p>
                            <p className="font-medium">English</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Box Office:</p>
                            <p className="font-medium">$1.49B</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Streaming:</p>
                            <p className="font-medium">Paramount+</p>
                        </div>
                    </div>
                </div>

                {/* Ratings */}
                <div className="flex flex-wrap gap-6 mt-6">
                    {[
                        { img: "/icons/IMDB_Logo.png", rating: "8.4", label: "IMDb" },
                        {
                            img: "/icons/Rotten_Tomatoes.png",
                            rating: "88%",
                            label: "Rotten Tomatoes",
                        },
                    ].map((rating, index) => (
                        <div key={index} className="flex items-center gap-2 relative group">
                            <img src={rating.img} alt={rating.label} className="w-8" />
                            <span className="text-lg font-semibold">{rating.rating}</span>
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                {rating.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Top Cast */}
                <h2 className="text-lg font-semibold mt-6 text-[#C8E8C8]">Top Cast</h2>
                <div className="flex gap-6 mt-3">
                    {[
                        { name: "Tom Cruise", role: "Maverick", img: "/cast/cast1.jpg" },
                        { name: "Miles Teller", role: "Rooster", img: "/cast/cast2.jpg" },
                        {
                            name: "Jennifer Connelly",
                            role: "Penny",
                            img: "/cast/cast3.jpg",
                        },
                        { name: "Jon Hamm", role: "Cyclone", img: "/cast/cast4.jpg" },
                    ].map((cast, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center w-20"
                        >
                            <img
                                src={cast.img}
                                alt={cast.name}
                                className="w-16 h-16 aspect-square rounded-full object-cover border-2 border-gray-700 shadow-md"
                            />

                            <p className="text-sm font-medium mt-1">{cast.name}</p>
                            <p className="text-xs text-gray-400">{cast.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
