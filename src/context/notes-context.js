import { createContext, useReducer, useContext, useState } from "react";
import { deleteReducer } from "reducer/delete-reducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notesDiv, setNotesDiv] = useState([]);
  const [deleteState, deleteDispatch] = useReducer(deleteReducer, {
    deletes: [],
  });

  return (
    <NotesContext.Provider
      value={{
        deleteState,
        deleteDispatch,
        notesDiv,
        setNotesDiv,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
