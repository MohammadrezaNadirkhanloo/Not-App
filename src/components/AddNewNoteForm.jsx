import { useState } from "react";

function AddNewNoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newData = {
      title,
      description,
      id: Date.now(),
      complete: false,
      createDate: new Date().toISOString(),
    };
    onAddNote(newData);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="Notetitle"
            className="form-label text_color fw-semibold"
          >
            Note Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control bg_input border-0 text-white"
            autoComplete="off"
            id="Notetitle"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="Description"
            className="form-label text_color fw-semibold"
          >
            Description:
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control bg_input border-0 text-white"
            autoComplete="off"
            id="Description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add new Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNoteForm;
