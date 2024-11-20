import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://notes-33mc.onrender.com/api/notes/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTitle(response.data.title);
        setContent(response.data.content);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching note");
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized");
        return;
      }

      await axios.put(
        `https://notes-33mc.onrender.com/api/notes/${id}`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Note updated successfully");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error updating note");
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized");
        return;
      }

      await axios.delete(`https://notes-33mc.onrender.com/api/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Note deleted successfully");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting note");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="edit-note-container">
      <h2 className="text-center text-2xl font-bold">Edit Note</h2>
      <div className="mt-4 space-y-4">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent outline-none px-4 py-2 w-full rounded-md border border-[#2C3338]"
          placeholder="Edit note title..."
        />

        {/* Content Input */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="bg-transparent outline-none px-4 py-2 w-full rounded-md border border-[#2C3338]"
          rows={10}
          placeholder="Edit note content..."
        ></textarea>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Update Note
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNotes;
