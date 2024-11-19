import React from "react";

const ManageNotes = ({ notes }) => {
  return (
    <div className="border-r-[1px]">
      <input className="bg-transparent" type="text" placeholder="Search your notes here" name="" id="" />
      <button className="mb-6">Search</button>

      {notes.map((head, key) => (
        <h1 key={key}>{head.title}</h1>
      ))}
    </div>
  );
};

export default ManageNotes;
