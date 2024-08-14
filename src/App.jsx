import { useState } from "react";
import AddNewNoteForm from "./components/AddNewNoteForm";
import NoteList from "./components/NoteList";
import Header from "./components/Header";

function App() {
  const [listNote, setListNote] = useState([]);
  const [sort, setSort] = useState("1");

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

  let sortDatasList = listNote;
  switch (sort) {
    case "1":
      sortDatasList = [...sortDatasList].sort(
        (a, b) => new Date(a.createDate) - new Date(b.createDate)
      );
      break;

    default:
      sortDatasList = [...sortDatasList].sort(
        (a, b) => new Date(b.createDate) - new Date(a.createDate)
      );
      break;
  }
  return (
    <>
      <div className="row pt-5 pb-3 mb-5 border-bottom align-items-center g-3">
        <Header
          datas={listNote}
          sortBy={sort}
          sorthHandle={(e) => setSort(e.target.value)}
        />
      </div>
      <div className="row g-5">
        <div className="col-12 col-lg-6">
          <AddNewNoteForm onAddNote={handleAddNote} />
        </div>
        <div className="col-12 col-lg-6">
          <NoteList
            nots={sortDatasList}
            onDelete={handleDelete}
            onComplet={handleComplet}
          />
        </div>
      </div>
    </>
  );
}

export default App;
