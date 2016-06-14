import { INCREMENT } from '../constants'

export default (count, action) => {
    const { type, payload } = action
    return type == INCREMENT ? count + payload.value : count
}