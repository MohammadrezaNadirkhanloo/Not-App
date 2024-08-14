import { useState } from "react";
import AddNewNoteForm from "./components/AddNewNoteForm";
import NoteList from "./components/NoteList";
import Header from "./components/Header";

function App() {
  const [listNote, setListNote] = useState([]);

  const handleAddNote = (newNote) => {
    setListNote((item) => [...item, newNote]);
  };

  const handleDelete = (id) => {
    setListNote((pervNote) => pervNote.filter((item) => item.id !== id));
  };

  const handleComplet = (id) => {
    setListNote((pervNote) =>
      pervNote.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };
  return (
    <>
      <div className="row pt-5 pb-3 mb-5 border-bottom align-items-center g-3">
        <Header datas={listNote} />
      </div>
      <div className="row g-5">
        <div className="col-12 col-lg-6">
          <AddNewNoteForm onAddNote={handleAddNote} />
        </div>
        <div className="col-12 col-lg-6">
          <NoteList
            nots={listNote}
            onDelete={handleDelete}
            onComplet={handleComplet}
          />
        </div>
      </div>
    </>
  );
}

export default App;
