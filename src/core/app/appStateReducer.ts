const initialAppState = {
  account: null as null | {email: string}
};

export type AppStateReducerAction = {
  type: "SET_LOGGED_IN_ACCOUNT";
  account: {email: string} | null;
};

function appStateReducer(state: typeof initialAppState, action: AppStateReducerAction) {
  let newState = state;

  switch (action.type) {
    case "SET_LOGGED_IN_ACCOUNT": {
      newState = {
        ...state,
        account: action.account
      };
      break;
    }

    default:
      break;
  }

  return newState;
}

export {appStateReducer, initialAppState};
