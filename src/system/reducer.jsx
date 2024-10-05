import { combineReducers } from 'redux';
import AccountReducer from '../container/account/account_reducer';
import { modalReducer } from "../container/common/components/modal";
const rootReducer = combineReducers({
    account: AccountReducer,
    modals: modalReducer,
  })
  export default rootReducer;