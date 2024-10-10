import AddNewNoteForm from "./AddNewNoteForm";
import NoteList from "./NoteList";

function NoteApp({ sortBy }) {
  return (
    <div className="row g-5">
      <div className="col-12 col-lg-6">
        <AddNewNoteForm />
      </div>
      <div className="col-12 col-lg-6">
        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
}

export default NoteApp;
