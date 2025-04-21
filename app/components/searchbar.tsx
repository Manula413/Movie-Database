import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="flex items-center bg-[#272727] rounded-full px-4 py-2 max-w-lg mx-auto shadow-lg">
      <Search size={20} className="text-[#C8E8C8] mr-2" />
      <input
        type="text"
        placeholder="Search any movies..."
        className="bg-transparent text-[#C8E8C8] flex-1 outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update the parent state
      />
    </div>
  );
}
