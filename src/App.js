import React from "react";
import axios from "axios";
import { Option } from "./Option";
import "./App.css";

function App() {
  const [file, setFile] = React.useState(null);
  const [response, setResponse] = React.useState([]);

  const onFileChange = (e) => {
    const uploadedFile = e.target.files[0] || null;
    if (uploadedFile) {
      setFile(uploadedFile);
    }
    console.log(e.target.files[0]);
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      data.append("file", file);
      axios
        .post("http://localhost:8000/database-1/", data)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((e) => console.log(e));
    }
  }
  console.log(response);

  return (
    <div className="App">
      <div className="upload-file">
        <form onSubmit={onSubmit}>
          <label htmlFor="upload">File Upload</label>
          <input
            onChange={(e) => onFileChange(e)}
            type="file"
            id="upload"
            name="file"
            accept=".docx"
          />
          <button type="submit">Submit</button>
        </form>
        {response.length > 1 &&
          response.map((option, i) => (
            <Option
              key={i}
              title={option.title}
              details={option.details}
              label={option.label}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
