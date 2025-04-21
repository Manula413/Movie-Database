import React from "react";
import { Star, Circle } from "lucide-react";

const MovieCard = () => {
    return (
        <div className="bg-[#030712] p-6 rounded-2xl flex flex-col md:flex-row gap-6 shadow-md max-w-5xl mx-auto">
            {/* Movie Poster */}
            <img
                src="/posters/poster1.jpg"
                alt="Top Gun: Maverick"
                className="w-full md:w-1/3 rounded-xl object-cover"
            />

            {/* Movie Details */}
            <div className="flex-1 text-[#C8E8C8]">
                {/* Title & Genre */}
                <h1 className="text-3xl font-bold text-[#C8E8C8]">Top Gun: Maverick</h1>
                <p className="text-gray-400">Movie • 2022 • Action • Adventure</p>

                {/* Story Line */}
                <h2 className="text-lg font-semibold mt-4 text-[#C8E8C8]">Story Line</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                    Set 30 years after its predecessor, it follows Maverick's return to the United
                    States Navy Strike Fighter Tactics Instructor program (also known as U.S.
                    Navy-Fighter Weapons School - "TOPGUN"), where he must confront his past as he
                    trains a group of younger pilots, among them the son of Maverick's deceased best
                    friend Lieutenant Nick "Goose" Bradshaw, USN.
                </p>

                {/* Ratings */}
                <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                        <img src="/icons/imdb.png" alt="IMDb" className="w-6" />
                        <span>8.4</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Circle size={20} className="text-red-500" />
                        <span>88%</span>
                    </div>
                </div>

                {/* Top Cast */}
                <h2 className="text-lg font-semibold mt-6 text-[#C8E8C8]">Top Cast</h2>
                <div className="flex gap-4 mt-2">
                    {[
                        { name: "Pedro Pascal", role: "Joel Miller", img: "/cast/cast1.jpg" },
                        { name: "Bella Ramsey", role: "Ellie", img: "/cast/cast2.jpg" },
                        { name: "Anna Torv", role: "Tessa", img: "/cast/cast3.jpg" },
                        { name: "Ashley Johnson", role: "Ellie Mother", img: "/cast/cast4.jpg" },
                    ].map((cast, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={cast.img}
                                alt={cast.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                            />
                            <p className="text-sm font-medium">{cast.name}</p>
                            <p className="text-xs text-gray-400">{cast.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
