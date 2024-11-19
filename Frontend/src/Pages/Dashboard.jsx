import React, { useState } from "react";
import NotesCard from "../component/NotesCard";
import { useNavigate } from "react-router-dom";

const notes = [
  {
    title: "Heading 1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus vitae cum nemo porro dolorem! Sequi, deleniti, magnam dolor est similique voluptates dolore hic harum consequatur ad excepturi modi, veritatis voluptatibus.",
    created: "2023-01-10",
    updated: "2023-02-01",
  },
  {
    title: "Heading 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    created: "2023-02-15",
    updated: "2023-02-20",
  },
  {
    title: "Heading 3",
    desc: "Lorem ipsum dolor sit amet.",
    created: "2023-03-01",
    updated: "2023-03-02",
  },
  {
    title: "Heading 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    created: "2023-02-15",
    updated: "2023-02-20",
  },
  {
    title: "Heading 3",
    desc: "Lorem ipsum dolor sit amet.",
    created: "2023-03-01",
    updated: "2023-03-02",
  },
  {
    title: "Heading 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    created: "2023-02-15",
    updated: "2023-02-20",
  },
  {
    title: "Heading 3",
    desc: "Lorem ipsum dolor sit amet.",
    created: "2023-03-01",
    updated: "2023-03-02",
  },
];

const Dashboard = () => {
  const [sortCriteria, setSortCriteria] = useState("created");
  const navigate = useNavigate();

  const sortedNotes = [...notes].sort((a, b) => {
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
      {/* Search Input */}
      <input
        className="w-full px-4 text-gray-800 py-2 bg-gray-100 border-[1px] border-gray-300 rounded-md outline-none"
        type="text"
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
        {sortedNotes.map((item, key) => (
          <NotesCard key={key} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
