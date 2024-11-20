import React, { useEffect, useState } from "react";
import NotesCard from "../component/NotesCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [notes, setNotes] = useState([]); // Original notes fetched from backend
  const [filteredNotes, setFilteredNotes] = useState([]); // Notes to display based on search/filter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortCriteria, setSortCriteria] = useState("created");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Fetch notes from backend
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:3000/api/notes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNotes(response.data);
        setFilteredNotes(response.data); // Initialize filtered notes
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching notes");
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Handle search query changes
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filtering based on title mathc
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(query)
    );
    setFilteredNotes(filtered);
  };

  // Handle sorting
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortCriteria === "created") {
      return new Date(b.created) - new Date(a.created);
    }
    if (sortCriteria === "updated") {
      return new Date(a.updated) - new Date(b.updated);
    }
    return 0;
  });

  return (
    <div className="pt-12">
      {loading && <p className="text-center text-gray-500">Loading notes...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {/* Search Input */}
          <input
            className="w-full px-4 text-gray-800 py-2 bg-gray-100 border-[1px] border-gray-300 rounded-md outline-none"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search all your notes here..."
          />

          {/* Sorting & Add Notes */}
          <div className="flex justify-end space-x-3 mt-6">
            <div>
              <select
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
                className="outline-none bg-blue-500 px-2 py-2 rounded-md"
              >
                <option value="created">Creation Date</option>
                <option value="updated">Updation Date</option>
              </select>
            </div>
            <button
              onClick={() => navigate("/notes")}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md"
            >
              Add Notes
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-6">
            {sortedNotes.map((note) => (
              <NotesCard
                key={note._id}
                title={note.title}
                desc={note.content}
                id={note._id}
              />
            ))}
          </div>

          {sortedNotes.length === 0 && (
            <p className="text-center text-gray-500">No notes found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
