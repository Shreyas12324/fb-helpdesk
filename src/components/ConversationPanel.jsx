import React from "react";

const ConversationPanel = ({ selectedConversation }) => {
  if (!selectedConversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a conversation to view messages
      </div>
    );
  }

  return (
    <div className="flex w-full">
      {/* Chat Section */}
      <div className="w-2/3 flex flex-col justify-between p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{selectedConversation.name}</h2>
          <div className="space-y-2">
            {selectedConversation.messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded max-w-[75%] ${
                  msg.from === "agent"
                    ? "bg-blue-100 self-end text-right ml-auto"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t pt-4">
          <input
            type="text"
            placeholder="Type a reply..."
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* Customer Info */}
      <div className="w-1/3 bg-white p-6 border-l border-gray-200">
        <div className="text-center">
          <img
            src={selectedConversation.avatar}
            alt="avatar"
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <h3 className="font-semibold text-lg">{selectedConversation.name}</h3>
          <p className="text-gray-500 text-sm mb-4">Offline</p>
          <div className="flex justify-center gap-4 mb-4">
            <button className="text-sm border rounded px-4 py-1">Call</button>
            <button className="text-sm border rounded px-4 py-1">Profile</button>
          </div>
          <div className="text-sm text-left space-y-1">
            <p><strong>Email:</strong> amit@richpanel.com</p>
            <p><strong>First Name:</strong> Amit</p>
            <p><strong>Last Name:</strong> RG</p>
            <button
  onClick={() => alert("Details feature coming soon")}
  className="text-blue-600 hover:underline"
>
  View more details
</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPanel;
