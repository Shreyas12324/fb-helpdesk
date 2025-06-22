const mockConversations = [
  {
    id: 1,
    name: "Amit RG",
    avatar: "https://i.pravatar.cc/300?img=12",
    message: "Is it in stock right now?",
    time: "10m",
    platform: "Facebook DM",
    messages: [
      { from: "user", text: "Is it in stock right now?" },
      { from: "agent", text: "We’ve 3 left in stock!" },
      { from: "agent", text: "If you order before 8PM we can ship it today." },
    ],
  },
  {
    id: 2,
    name: "Hiten Saxena",
    avatar: "https://i.pravatar.cc/300?img=11",
    message: "Available in store?",
    time: "10m",
    platform: "Facebook Post",
    messages: [
      { from: "user", text: "Available in store?" },
      { from: "agent", text: "Yes, you can visit any branch near you." },
    ],
  },
];

export default mockConversations;
