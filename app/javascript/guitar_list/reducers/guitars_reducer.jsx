const SET_GUITARS = 'SET_GUITARS'

const guitarsReducer = (state, action) => {
 if (state === undefined) {
 // Reducer initialisation
 return [];
 }
 // TODO: handle some actions
 switch (action.type) {
  case SET_GUITARS:
    return action.payload;
  default:
    return state;
 }
};
export default guitarsReducer;
