type Action = {
  type: string;
};

export const isLoggedReducer = (state = false, action: Action) => {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};
