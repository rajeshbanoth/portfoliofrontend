import React, { useState, useRef } from "react";

function Code() {
  const [text, setText] = useState("");
  const [tableRows, setTableRows] = useState(2);
  const [tableCols, setTableCols] = useState(2);
  const editorRef = useRef();

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };

  const handleLink = () => {
    const url = prompt("Enter the URL:");
    document.execCommand("createLink", false, url);
    editorRef.current.focus();
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target.result;
      const html = type === "image" ? `<img src="${src}" />` : `<video src="${src}" />`;
      document.execCommand("insertHTML", false, html);
      editorRef.current.focus();
    };
    reader.readAsDataURL(file);
  };

  const handleTableCreate = () => {
    let html = "<table>";
    for (let i = 0; i < tableRows; i++) {
      html += "<tr>";
      for (let j = 0; j < tableCols; j++) {
        html += "<td contentEditable='true'></td>";
      }
      html += "</tr>";
    }
    html += "</table>";
    document.execCommand("insertHTML", false, html);
    editorRef.current.focus();
  };

  return (
    <div>
      <div id="toolbar">
        <button onClick={() => handleFormat("bold")}>Bold</button>
        <button onClick={() => handleFormat("italic")}>Italic</button>
        <button onClick={() => handleFormat("underline")}>Underline</button>
        <button onClick={() => handleFormat("strikethrough")}>Strikethrough</button>
        <button onClick={() => handleLink()}>Link</button>
        <label>
          Upload Image
          <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, "image")} style={{ display: "none" }} />
        </label>
        <label>
          Upload Video
          <input type="file" accept="video/*" onChange={(e) => handleFileUpload(e, "video")} style={{ display: "none" }} />
        </label>
        <button onClick={() => handleTableCreate()}>Create Table</button>
        <label>
          Rows:
          <input type="number" value={tableRows} onChange={(e) => setTableRows(parseInt(e.target.value))} />
        </label>
        <label>
          Columns:
          <input type="number" value={tableCols} onChange={(e) => setTableCols(parseInt(e.target.value))} />
        </label>
      </div>
      <div
        id="editor"
        contentEditable={true}
        onInput={(e) => setText(e.target.innerHTML)}
        ref={editorRef}
      ></div>
    </div>
  );
}

export default Code;
