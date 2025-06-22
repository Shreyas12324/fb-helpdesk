import React from "react";
import mockConversations from "../components/mockConversations";

const Inbox = ({ onSelect, selectedId }) => {
  return (
    <div className="w-80 h-full bg-white p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Conversations</h2>
      <ul>
        {mockConversations.map((conv, index) => (
          <li
            key={index}
            onClick={() => onSelect(conv)}
            className={`p-2 cursor-pointer rounded hover:bg-blue-50 ${
              selectedId === conv.id ? "bg-blue-100" : ""
            }`}
          >
            <p className="font-semibold">{conv.name}</p>
            <p className="text-sm text-gray-500 truncate">{conv.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
