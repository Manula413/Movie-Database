import { useState, useRef } from "react";
import { Upload, Download, File, List, Check, X } from "lucide-react";

export default function SettingsPage() {
  const [selectedImportList, setSelectedImportList] = useState("watchLater");
  const [selectedExportList, setSelectedExportList] = useState("watchLater");
  const [importFile, setImportFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImportFile(file);
    }
  };

  const handleImport = () => {
    if (!importFile) return alert("Please select a file to import.");
    alert(`Importing movies to ${selectedImportList} list.`);
    // TODO: Implement actual import logic
  };

  const handleExport = () => {
    alert(`Exporting movies from ${selectedExportList} list.`);
    // TODO: Implement actual export logic
  };

  return (
    <div className="min-h-screen text-[#C8E8C8] font-rubik p-6 md:px-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* Import Section */}
      <section className="w-full max-w-md bg-[#272727] bg-opacity-10 p-6 rounded-2xl  mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Upload className="w-6 h-6" /> Import Movies
        </h2>
        <div className="flex flex-col gap-4">
          <select
            value={selectedImportList}
            onChange={(e) => setSelectedImportList(e.target.value)}
            className="bg-[#272727] bg-opacity-50 text-[#C8E8C8] rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="watchLater">Watch Later</option>
            <option value="watched">Watched</option>
            <option value="customList">Custom List</option>
          </select>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-[#272727] bg-opacity-50 hover:bg-[#3a3a3a] rounded-lg transition"
            >
              <File className="w-5 h-5" />
              {importFile ? importFile.name : "Choose Excel File"}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="hidden"
            />
            {importFile && (
              <button onClick={() => setImportFile(null)}>
                <X className="w-5 h-5 text-red-500" />
              </button>
            )}
          </div>

          <button
            onClick={handleImport}
            className="w-full bg-green-600 bg-opacity-50 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" /> Import
          </button>
        </div>
      </section>

      {/* Export Section */}
      <section className="w-full max-w-md bg-[#272727] bg-opacity-10 p-6 rounded-2xl ">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Download className="w-6 h-6" /> Export Movies
        </h2>
        <div className="flex flex-col gap-4">
          <select
            value={selectedExportList}
            onChange={(e) => setSelectedExportList(e.target.value)}
            className="bg-[#272727] bg-opacity-50 text-[#C8E8C8] rounded-lg px-3 py-2 focus:outline-none"
          >
            <option value="watchLater">Watch Later</option>
            <option value="watched">Watched</option>
            <option value="customList">Custom List</option>
          </select>

          <button
            onClick={handleExport}
            className="w-full bg-blue-600 bg-opacity-50 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" /> Export Excel File
          </button>
        </div>
      </section>
    </div>
  );
}
