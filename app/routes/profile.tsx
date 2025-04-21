import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Camera, Lock, User, Edit, Check, X, Mail, Trash2, LogOut, Save } from "lucide-react";

export default function ProfilePage() {
    const [username, setUsername] = useState("John Doe");
    const [newUsername, setNewUsername] = useState("");
    const [editingUsername, setEditingUsername] = useState(false);
    const [email, setEmail] = useState("johndoe@example.com");
    const [newEmail, setNewEmail] = useState("");
    const [editingEmail, setEditingEmail] = useState(false);
    const [profilePic, setProfilePic] = useState("favicon.ico");
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleProfilePicChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setProfilePic(imageUrl);
      }
    };
  
    const handleUsernameChange = (e: FormEvent) => {
      e.preventDefault();
      if (newUsername.trim()) {
        setUsername(newUsername.trim());
        setNewUsername("");
        setEditingUsername(false);
      }
    };
  
    const handleEmailChange = (e: FormEvent) => {
      e.preventDefault();
      if (newEmail.trim()) {
        setEmail(newEmail.trim());
        setNewEmail("");
        setEditingEmail(false);
      }
    };

  return (
    <div className="min-h-screen text-[#C8E8C8] font-rubik p-6 md:px-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>

      {/* Profile Picture */}
      <div className="relative group">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-[#C8E8C8] shadow-md"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="absolute bottom-2 right-2 bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
        >
          <Camera className="w-5 h-5 text-[#C8E8C8]" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleProfilePicChange}
        />
      </div>

      {/* Username Section */}
      <div className="mt-6 w-full max-w-md">
        <label className="block text-sm font-medium mb-1">Username</label>
        {editingUsername ? (
          <div className="flex items-center gap-2 border border-gray-500 px-3 py-2 rounded-lg bg-[#272727]">
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="bg-transparent text-[#C8E8C8] w-full focus:outline-none"
              placeholder="New username"
            />
            <button onClick={handleUsernameChange}><Check className="w-5 h-5 text-green-500" /></button>
            <button onClick={() => setEditingUsername(false)}><X className="w-5 h-5 text-red-500" /></button>
          </div>
        ) : (
            <div className="flex items-center justify-between bg-gray-800 bg-opacity-50 px-3 py-2 rounded-lg">
            <span>{username}</span>
            <button onClick={() => setEditingUsername(true)}>
              <Edit className="w-5 h-5 text-[#C8E8C8]" />
            </button>
          </div>
          
        )}
      </div>

      {/* Email Section */}
      <div className="mt-4 w-full max-w-md">
        <label className="block text-sm font-medium mb-1">Email</label>
        {editingEmail ? (
          <div className="flex items-center gap-2 border border-gray-500 px-3 py-2 rounded-lg bg-[#272727]">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="bg-transparent text-[#C8E8C8] w-full focus:outline-none"
              placeholder="New email"
            />
            <button onClick={handleEmailChange}><Check className="w-5 h-5 text-green-500" /></button>
            <button onClick={() => setEditingEmail(false)}><X className="w-5 h-5 text-red-500" /></button>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-[#272727] bg-opacity-50 px-3 py-2 rounded-lg">
            <span>{email}</span>
            <button onClick={() => setEditingEmail(true)}><Edit className="w-5 h-5 text-[#C8E8C8]" /></button>
          </div>
        )}
      </div>

      {/* Account Settings */}
      <div className="mt-8 w-full max-w-md bg-[#272727] bg-opacity-50 p-6 rounded-lg shadow-lg space-y-4">
        <h3 className="text-lg font-semibold mb-2">Account Settings</h3>

        <div className="flex justify-between items-center border-b border-gray-600 py-3">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#C8E8C8]" />
            <span>Change Password</span>
          </div>
          <button className="text-sm text-blue-400 hover:underline">Change</button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-600 py-3">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-[#C8E8C8]" />
            <span>Manage Personal Info</span>
          </div>
          <button className="text-sm text-blue-400 hover:underline">Edit</button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-600 py-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#C8E8C8]" />
            <span>Email Preferences</span>
          </div>
          <button className="text-sm text-blue-400 hover:underline">Manage</button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-600 py-3">
          <div className="flex items-center gap-3">
            <Trash2 className="w-5 h-5 text-red-400" />
            <span className="text-red-400">Delete Account</span>
          </div>
          <button className="text-sm text-red-400 hover:underline">Delete</button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-600 py-3">
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-[#C8E8C8]" />
            <span>Log Out</span>
          </div>
          <button className="text-sm text-red-400 hover:underline">Log Out</button>
        </div>
      </div>
    </div>
  );
}
