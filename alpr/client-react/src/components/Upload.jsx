import { useState } from "react";
import { uploadVideo } from "../api";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const form = new FormData();
    form.append("video", file);

    const res = await uploadVideo(form);
    alert("Uploaded: " + res.incidentId);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}