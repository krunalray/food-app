import {
    AUTHENTICATE_CUSTOMER,
    UNAUTHENTICATE_CUSTOMER,
    FETCH_CUSTOMER_ACCOUNT_PROFILE,
    AUTHENTICATE_ADMIN,
    UNAUTHENTICATE_ADMIN,
    VALIDATION_ERROR,
    AUTHENTICATE_COOK,
    UNAUTHENTICATE_COOK,


} from './account_action';

export default function AccountReducer(state = {}, action) {
    switch (action.type) {
        case AUTHENTICATE_CUSTOMER:
            return { ...state, error: '', authenticated_customer: true, token: action.payload }
        case UNAUTHENTICATE_CUSTOMER:
            return { ...state, error: '', authenticated_customer: false, token: false }
         case FETCH_CUSTOMER_ACCOUNT_PROFILE:
            return { ...state, customer_profile: action.payload }
        case VALIDATION_ERROR:
            return { ...state, error: action.payload }
        case AUTHENTICATE_ADMIN:
            return { ...state, error: '', authenticated_admin: true, token: action.payload }
        case UNAUTHENTICATE_ADMIN:
            return { ...state, error: '', authenticated_admin: false, token: false }

        case AUTHENTICATE_COOK:
            return { ...state, error: '', authenticated_adminr: true, token: action.payload }
        case UNAUTHENTICATE_COOK:
            return { ...state, error: '', authenticated_admin: false, token: false }
        default:
            return state;
    }

}

