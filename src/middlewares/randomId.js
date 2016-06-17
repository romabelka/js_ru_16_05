export default store => next => action => {
    const { withRandomId, ...rest} = action
    if (!withRandomId) next(action)
    const randomId = Date.now() + Math.random()
    next({ ...rest, randomId })
}