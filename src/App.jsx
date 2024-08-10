function App() {
  return (
    <>
      <div className="row pt-5 pb-3 mb-5 border-bottom align-items-center g-3">
        <div className="col-lg-10">
          <h1 className="text_color m-0">
            My Note: <span>0</span>
          </h1>
        </div>
        <div data-bs-theme="dark" className="col-lg-2">
          <select
            class="form-select bg_input border-0 cursor"
            aria-label="Default select example"
          >
            <option selected value="1">
              One
            </option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-12 col-lg-6">
          <form>
            <div className="mb-3">
              <label for="Notetitle" className="form-label text_color fw-semibold">
                Note Title
              </label>
              <input type="text" className="form-control bg_input border-0 text-white" id="Notetitle" />
            </div>
            <div className="mb-3">
              <label for="Description" className="form-label text_color fw-semibold">
                Description:
              </label>
              <input type="text" className="form-control bg_input border-0 text-white" id="Description" />
            </div>
            <button type="submit" className="btn btn-primary">
              Add new Note
            </button>
          </form>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-between">
            <p className="text_color fw-semibold">
              All{" "}
              <span class="badge text-bg-secondary mx-1 rounded-pill">4</span>
            </p>
            <p className="text_color fw-semibold">
              Completed{" "}
              <span class="badge text-bg-secondary mx-1 rounded-pill">4</span>
            </p>
            <p className="text_color fw-semibold">
              Open{" "}
              <span class="badge text-bg-secondary mx-1 rounded-pill">4</span>
            </p>
          </div>
          <div className="mx-3 border border-2 rounded-4 border_color p-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <p className="fw-bold fs-4 text_color mb-1">title</p>
                <p className="fw-semibold fs-6 text_color Description">
                  Description{" "}
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-danger border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </button>
                <input
                  className="form-check-input fs-5 cars cursor"
                  type="checkbox"
                  id="checkboxNoLabel"
                />
              </div>
            </div>
            <div>
              <p className="text_color fw-bold m-0">2024/9/5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
