function Header({datas}) {
  return (
    <>
      <div className="col-lg-10">
        <h1 className="text_color m-0">
          My Note: <span>{datas.length}</span>
        </h1>
      </div>
      <div data-bs-theme="dark" className="col-lg-2">
        <select
          className="form-select bg_input border-0 cursor"
          aria-label="Default select example"
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
}

export default Header;
