import { INCREMENT } from '../constants'

export function increment() {
    return {
        type: INCREMENT,
        payload: {
            value:  1
        }
    }
}