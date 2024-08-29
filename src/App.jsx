import { useReducer, useState } from "react";
import AddNewNoteForm from "./components/AddNewNoteForm";
import NoteList from "./components/NoteList";
import Header from "./components/Header";

function handelReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "delete": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "complete": {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, complete: !item.complete }
          : item
      );
    }
    default:
      throw new Error("unknown");
  }
}

function App() {
  const [listNote, dispatch] = useReducer(handelReducer, []);
  const [sort, setSort] = useState("1");

  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleComplet = (idComplet) => {
    dispatch({ type: "complete", payload: idComplet });
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
