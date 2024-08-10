function App() {
  return (
    <>
      <div className="row pt-5 pb-3 border-bottom align-items-center">
        <div className="col-10">
          <h1 className="text_color m-0">
            My Note: <span>0</span>
          </h1>
        </div>
        <div data-bs-theme="dark" className="col-2">
          <select
            class="form-select bg_input border-0 "
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
      <div></div>
    </>
  );
}

export default App;
