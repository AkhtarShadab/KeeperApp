import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handlechange(event) {
    const { name, value } = event.target;
    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handlechange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handlechange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
