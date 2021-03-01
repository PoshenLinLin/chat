import {handleAction, handleActions} from 'redux-actions'

import actionTypes from 'actions/actionTypes'

const initialState = {
    loading: false,
    error: false,
    errorMsg: '',
}

export const requestReducer = handleActions({
    [actionTypes.REQUEST.LOADING]: (state, action) => ({...state, loading: action.payload}),
    [actionTypes.REQUEST.SUCCESS]: (state, action) => ({...state, loading: false}),
    [actionTypes.REQUEST.ERROR]: (state, action) => ({...state, loading: false, errorMsg: action.payload}),
}, initialState)