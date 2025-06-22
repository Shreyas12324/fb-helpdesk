import axios from "axios";

export default function ConnectFacebook() {
  const token = localStorage.getItem("token");

  const handleMockConnect = async () => {
    const mockPage = {
      pageId: "1234567890",
      accessToken: "mock_access_token_abc123",
    };

    try {
      await axios.post(
        "http://localhost:5000/api/facebook/connect",
        mockPage,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Mock Facebook Page connected!");
    } catch (err) {
      console.error("Error saving page", err);
      alert("Failed to connect mock page.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-800 flex items-center justify-center">
    <div className="bg-white p-6 rounded text-center w-[350px]">
      <h2 className="text-lg font-semibold mb-4">Connect Facebook Page</h2>
      <p className="mb-6 text-sm text-gray-600">
        Click below to simulate connecting a Facebook Page.
      </p>
      <button
        onClick={handleMockConnect}
        className="bg-blue-800 text-white px-6 py-2 rounded"
      >
        Mock Connect Page
      </button>
    </div>
    </div>
  );
}
