import {createAction} from 'redux-actions'
import {createActions} from 'redux-actions'
import Router from 'next/router'

import actionType from './actionTypes'


export const goTo = (path) => {
    Router.push(path)
}

const login = ({username, password}) => async (dispatch) => {
    try{
        dispatch(requestLoading(false))

        Router.push('/')
    }catch (e){

    }finally {
        dispatch(requestLoading(false))
    }

}


export const requestLoading = createAction(actionType.REQUEST.LOADING, bool => bool)
export const requestError = createAction(actionType.REQUEST.ERROR, msg => msg)
export const requestSuccess = createAction(actionType.REQUEST.SUCCESS, )