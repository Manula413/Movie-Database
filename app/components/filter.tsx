// components/FilterOptions.tsx
const categories = ["All", "Action", "Comedy", "Drama", "Horror", "Trending", "Watch Next"];

export default function FilterOptions() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
      {categories.map((category) => (
        <button
          key={category}
          className="bg-[#212525] text-[#C8E8C8] px-4 py-2 rounded-full hover:bg-[#272727] transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
