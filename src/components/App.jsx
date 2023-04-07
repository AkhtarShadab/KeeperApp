import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(object) {
    setNotes((preNotes) => {
      return [...preNotes, object];
    });
  }
  function delNote(key) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== key;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            content={note.content}
            title={note.title}
            deleteNote={delNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
