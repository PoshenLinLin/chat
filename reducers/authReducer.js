import {handleActions} from 'redux-actions'

const userState = {
    user: {
        username: '',
        email: '',
        phone: '',
        active: '',
    }
}

export const authReducer = handleActions({

}, userState)