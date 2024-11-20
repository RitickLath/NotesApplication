import React from "react";
import { useNavigate } from "react-router-dom";

const NotesCard = ({ title, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        // alert(id);
        navigate("/editnotes/" + id);
      }}
      className="flex flex-col cursor-pointer mt-6 w-full sm:w-[250px] md:w-[300px] lg:w-[350px] min-h-[200px] p-6 rounded-lg shadow-lg hover:shadow-xl"
    >
      <h1 className="text-xl font-bold text-gray-100 mb-4 truncate">{title}</h1>
      <p className="text-gray-300 text-sm line-clamp-4">
        {desc.length > 300 ? `${desc.slice(0, 300)}...` : desc}
      </p>
    </div>
  );
};

export default NotesCard;
