import { SIGN_IN } from '../constants'
import AppDispatcher from '../dispatcher'

export function signIn(name) {
    AppDispatcher.dispatch({
        type: SIGN_IN,
        payload: { name }
    })
}