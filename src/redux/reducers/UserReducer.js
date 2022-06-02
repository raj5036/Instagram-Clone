import UserInitialState from "../actions/userActions";
import ReduxActionEnum from "../ReduxActionEnum";

const UserReducer = (state = UserInitialState, action) => {
   switch (action.type) {
      case ReduxActionEnum.LOGIN_ACTION:
         return {
            loggedIn: true,
            loggedUser: action.payload,
         };

      case ReduxActionEnum.LOGOUT_ACTION:
         return {
            loggedIn: false,
            loggedUser: {},
         };

      default:
         return state;
   }
};

export default UserReducer;
