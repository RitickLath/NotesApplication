import React, { useState } from "react";
import axios from "axios";

const CreateNotes = ({ show, setShowDiv }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");

  const handleAddNote = async (e) => {
    e.preventDefault();

    if (!title || !desc) {
      setMessage("Please provide both a title and a description.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://notes-33mc.onrender.com/api/notes",
        {
          title,
          content: desc,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      if (response.status === 201) {
        setMessage("Note created successfully!");
        setTitle("");
        setDesc("");
        setShowDiv(false);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="z-30 bg-blue-700 p-4 mt-12 mx-auto">
      <h2 className="outline-none text-2xl font-bold mb-6 text-center">
        Create a New Note
      </h2>
      <div className="space-y-4">
        {/* Title Input */}
        <input
          className="bg-transparent border-[1px] border-[#2C3338] text-gray-200 outline-none w-full px-4 py-2 rounded-md"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
        />

        {/* Description Input */}
        <textarea
          className="bg-transparent border-[1px] border-[#2C3338] text-gray-200 outline-none w-full px-4 py-2 rounded-md"
          value={desc}
          rows={12}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter note description..."
        ></textarea>

        <div className="flex justify-end">
          <button
            onClick={handleAddNote}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md"
          >
            Add Note
          </button>
        </div>

        {/* Message Display */}
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default CreateNotes;
