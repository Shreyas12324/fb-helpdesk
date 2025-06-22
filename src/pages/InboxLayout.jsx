import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Inbox from "../components/Inbox";
import ConversationPanel from "../components/ConversationPanel";

const InboxLayout = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-blue-900 text-white">
        <Sidebar />
      </div>

      {/* Conversation List */}
      <div className="w-[300px] bg-white border-r border-gray-200 overflow-y-auto">
        <Inbox
          selectedId={selectedConversation?.id}
          onSelect={setSelectedConversation}
        />
      </div>

      {/* Chat Panel + Customer Info */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <ConversationPanel selectedConversation={selectedConversation} />
      </div>
    </div>
  );
};

export default InboxLayout;
