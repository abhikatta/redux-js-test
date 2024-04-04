import actions from "./actionsTypes";

const bugAdded = (objDescription) => {
  return {
    type: actions.ADD_BUG,
    payload: {
      description: objDescription,
    },
  };
};

const bugRemoved = (objID) => {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id: objID,
    },
  };
};

const bugResolved = (objID) => {
  return {
    type: actions.RESOLVE_BUG,
    payload: {
      id: objID,
    },
  };
};
export { bugAdded, bugRemoved, bugResolved };
