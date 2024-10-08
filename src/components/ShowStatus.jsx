import { useNotes } from "../context/NoteContext";

function ShowStatus() {
  const datas = useNotes();
  const allData = datas.length;
  const dataCompleted = datas.filter((item) => item.complete === true).length;

  if (!allData) return <h2 className="text_color">NO Nots,,</h2>;

  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text_color fw-semibold">
          All{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">
            {allData}
          </span>
        </p>
        <p className="text_color fw-semibold">
          Completed{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">
            {dataCompleted}
          </span>
        </p>
        <p className="text_color fw-semibold">
          Open{" "}
          <span className="badge text-bg-secondary mx-1 rounded-pill">
            {allData - dataCompleted}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ShowStatus;
