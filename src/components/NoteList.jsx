import { useNotes, useNotesDispatch } from "../context/NoteContext";
import ShowStatus from "./ShowStatus";

function NoteList({ sortBy }) {
  const datas = useNotes();

  let sortDatasList = datas;
  switch (sortBy) {
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
    <div>
      <div>
        <ShowStatus />
      </div>
      <div>
        {sortDatasList.map((item) => (
          <ItemNote key={item.id} note={item} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;

function ItemNote({ note }) {
  const dispatch = useNotesDispatch();
  return (
    <div
      data-testid="item"
      className={`m-3 border border-2 rounded-4 border_color p-3 ${
        note.complete ? "complete" : ""
      }`}
    >
      <div className="d-flex justify-content-between">
        <div
          className={`d-flex flex-column text_color ${
            note.complete ? "text-decoration-line-through " : ""
          }`}
        >
          <p className="fw-bold fs-4  mb-1 text_over">{note.title}</p>
          <p className="fw-semibold fs-6 text_over">{note.description}</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
            className="btn btn-outline-danger border-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
          <input
            className="form-check-input fs-5 cars cursor"
            type="checkbox"
            checked={note.complete}
            id={note.id}
            value={note.id}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
          />
        </div>
      </div>
      <div>
        <p className="text_color fw-bold m-0">
          {new Date(note.createDate).toLocaleDateString("en-US")}
        </p>
      </div>
    </div>
  );
}
