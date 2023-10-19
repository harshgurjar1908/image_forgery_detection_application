import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./dragdrop.css";
import axios from "axios";

const fileTypes = ["JPG", "PNG"];

function DragDrop(props) {
  const [data, setData] = useState({"result":"","probability":""});
  const [file, setFile] = useState(null);
  const[label,setlabel]=useState("Upload or drop a file right here");

  const handleChange = (file) => {
    setFile(file);
    setlabel(file.name);
  };
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData({"result":data.message,"probability":data.probability});
      });
  }, []);
  const onsubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios.post("http://localhost:5000/upload", formData).then((res) => {
        console.log(res.data.message);
        console.log(res.data.probability);
        
        // props.onresult(res.data.message);
        props.onresult({"result":res.data.message,"probability":res.data.probability});
      });
    } catch (error) {
      console.error(error);
    }
  };

  const Reset = () => {
    try {
      axios.post("http://localhost:5000/reset").then((res) => {
        console.log(res.data.message);
      });
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };
  function Proceed() {
    if (file != null) {
      props.onchange(file.name);
      // setlabel(file.name);
    }
  }

  const handle = () => {
    file == null ? alert("please select file.") : Proceed();
  };

  const onDrop = (fileOrFiles) => {
    console.log("drop", fileOrFiles);
  };
  const onSelect = (fileOrFiles) => {
    // setlabel(file.name);
    console.log("test", fileOrFiles);
  };
  return (
    <form onSubmit={onsubmit}>
      <div className="file">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          onDrop={onDrop}
          onSelect={onSelect}
          label={label}

        />
        <button className="proceed-btn" id="button" onClick={handle}>
          Proceed
        </button>
        <button className="reset-btn" id="button" onClick={Reset}>
          Reset
        </button>
      </div>
    </form>
  );
}
export default DragDrop;
