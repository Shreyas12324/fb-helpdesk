import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ConnectFacebook from "./pages/ConnectFacebook";
import InboxLayout from "./pages/InboxLayout";

function AppRoutes() {
  const location = useLocation();
  const isInboxRoute = location.pathname.startsWith('/inbox');

  return isInboxRoute ? (
    <Routes>
      <Route path="/inbox" element={<InboxLayout />} />
    </Routes>
  ) : (
    <div className="min-h-screen bg-blue-800 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/connect-fb" element={<ConnectFacebook />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
