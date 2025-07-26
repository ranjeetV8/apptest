import React, { useState } from "react";
import axios from "axios";

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE}/api/upload`,
      formData
    );
    setUrl(res.data.url);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded" width="200" />}
    </div>
  );
};

export default UploadComponent;
