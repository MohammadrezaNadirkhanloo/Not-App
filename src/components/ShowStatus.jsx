function ShowStatus({ datas }) {
  const dataCompleted = datas.filter((item) => item.complete === true);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text_color fw-semibold">
          All{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">
            {datas.length}
          </span>
        </p>
        <p className="text_color fw-semibold">
          Completed{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">
            {dataCompleted.length}
          </span>
        </p>
        <p className="text_color fw-semibold">
          Open{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">
            0
          </span>
        </p>
      </div>
    </div>
  );
}

export default ShowStatus;
