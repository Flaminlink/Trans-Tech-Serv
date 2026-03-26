import { useState } from "react";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";
import Review from "./components/Review";

export default function App() {
  const [page, setPage] = useState("upload");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ALPR System</h1>

      <div className="flex gap-3 mb-6">
        <button onClick={()=>setPage("upload")}>Upload</button>
        <button onClick={()=>setPage("dashboard")}>Dashboard</button>
        <button onClick={()=>setPage("review")}>Review</button>
      </div>

      {page === "upload" && <Upload />}
      {page === "dashboard" && <Dashboard />}
      {page === "review" && <Review />}
    </div>
  );
}