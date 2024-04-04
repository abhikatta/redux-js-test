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

const bugResolved = (state, objID) => {
  state.filter((bug) => {
    if (bug.id === objID) {
      bug.resolved = true;
    }
  });
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id: objID,
      resolved: true,
    },
  };
};
export { bugAdded, bugRemoved };
