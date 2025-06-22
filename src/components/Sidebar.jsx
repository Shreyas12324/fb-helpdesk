import { FaFacebookMessenger, FaUserFriends, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white w-16 h-screen flex flex-col items-center py-4 space-y-8">
      <FaFacebookMessenger size={24} className="cursor-pointer" />
      <FaUserFriends size={24} className="cursor-pointer" />
      <FaChartBar size={24} className="cursor-pointer" />
      <div className="mt-auto">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full w-8 h-8"
        />
      </div>
    </div>
  );
};

export default Sidebar;
