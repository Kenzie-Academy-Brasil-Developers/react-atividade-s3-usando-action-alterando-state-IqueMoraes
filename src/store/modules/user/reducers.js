const initialState = { name: "" };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      const { name } = action;
      console.log("passou");
      return { name: name };

    default:
      return state;
  }
};

export default UserReducer;
