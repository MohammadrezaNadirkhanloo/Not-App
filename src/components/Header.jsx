import { useState } from "react";

function Header({ datas, sortBy, sorthHandle }) {
  const allData = datas.length;

  return (
    <>
      <div className="col-lg-10">
        <h1 className="text_color m-0">
          My Notes: <span>{allData}</span>
        </h1>
      </div>
      <div data-bs-theme="dark" className="col-lg-2">
        <select
          className="form-select bg_input border-0 cursor"
          aria-label="Default select example"
          value={sortBy}
          onChange={sorthHandle}
        >
          <option value="1">Lastest</option>
          <option value="2">Earliest</option>
          <option value="3">Completed</option>
        </select>
      </div>
    </>
  );
}

export default Header;
