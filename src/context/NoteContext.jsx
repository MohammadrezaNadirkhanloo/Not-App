import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext(null);
const NotesDispatchContext = createContext(null);

function handelReducer(state, { type, payload }) {
  switch (type) {
    case "add": {
      return [...state, payload];
    }
    case "delete": {
      return state.filter((item) => item.id !== payload);
    }
    case "complete": {
      return state.map((item) =>
        item.id === payload ? { ...item, complete: !item.complete } : item
      );
    }
    default:
      throw new Error("unknown");
  }
}

export default function NoteProvider({ children }) {
  const [listNote, dispatch] = useReducer(handelReducer, []);
  return (
    <NoteContext.Provider value={listNote}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}
export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
