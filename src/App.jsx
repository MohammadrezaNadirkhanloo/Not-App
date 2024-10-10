import { useState } from "react";
import Header from "./components/Header";
import NoteApp from "./components/NoteApp";
import NoteProvider from "./context/NoteContext";

function App() {
  const [sort, setSort] = useState("1");

  return (
    <NoteProvider>
      <div className="row pt-5 pb-3 mb-5 border-bottom align-items-center g-3">
        <Header sortBy={sort} sorthHandle={(e) => setSort(e.target.value)} />
      </div>
      <NoteApp sortBy={sort} />
    </NoteProvider>
  );
}

export default App;
