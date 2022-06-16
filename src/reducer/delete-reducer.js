export const deleteReducer = (state, action) => {
  const { deletes } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_DELETES":
      if (deletes.filter((item) => item.id === payload.id).length === 1)
        return {
          ...state,
          deletes: [...deletes.filter((item) => item.id !== payload.id)],
        };

      return {
        ...state,
        deletes: [...deletes, payload],
      };
    case "REMOVE_FROM_DELETES":
      return {
        ...state,
        deletes: [...deletes.filter((item) => item.id !== payload.id)],
      };
    case "CLEAR":
      return payload;
    default:
      return state;
  }
};
