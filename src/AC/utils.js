import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../constants'

export function asyncAC(type, apiCall) {
    return () => {
        AppDispatcher.dispatch({
            type: type + START
        })

        //not for prod, just simulating slow connection
        setTimeout(() => {
            apiCall()
                .done((response) => AppDispatcher.dispatch({
                    type: type + SUCCESS,
                    response
                }))
                .fail((error) => AppDispatcher.dispatch({
                    type: type + FAIL,
                    error
                }))
        }, 1000)
    }
}