function ShowStatus() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text_color fw-semibold">
          All{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">4</span>
        </p>
        <p className="text_color fw-semibold">
          Completed{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">4</span>
        </p>
        <p className="text_color fw-semibold">
          Open{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">4</span>
        </p>
      </div>
    </div>
  );
}

export default ShowStatus;
