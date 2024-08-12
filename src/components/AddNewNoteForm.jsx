function AddNewNoteForm() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="Notetitle" className="form-label text_color fw-semibold">
            Note Title
          </label>
          <input
            type="text"
            className="form-control bg_input border-0 text-white"
            autoComplete="off"
            id="Notetitle"
          />
        </div>
        <div className="mb-3">
          <label
            for="Description"
            className="form-label text_color fw-semibold"
          >
            Description:
          </label>
          <input
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
