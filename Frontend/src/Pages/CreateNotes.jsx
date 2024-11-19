import React, { useState } from "react";

const CreateNotes = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddNote = () => {
    const newNote = { title, desc };
    if (addNote) addNote(newNote);

    setTitle("");
    setDesc("");
  };

  return (
    <div className="mt-12  mx-auto">
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
      </div>
    </div>
  );
};

export default CreateNotes;
