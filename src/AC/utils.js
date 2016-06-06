import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../constants'

export function asyncAC(type, apiCall) {
    return (payload) => {
        AppDispatcher.dispatch({
            type: type + START,
            payload
        })

        //not for prod, just simulating slow connection
        setTimeout(() => {
            apiCall(payload)
                .done((response) => AppDispatcher.dispatch({
                    type: type + SUCCESS,
                    payload,
                    response
                }))
                .fail((error) => AppDispatcher.dispatch({
                    type: type + FAIL,
                    payload,
                    error
                }))
        }, 1000)
    }
}