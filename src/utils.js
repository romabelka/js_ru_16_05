import store from './store'

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!entity.get(relation) || !relStore) return []

    return entity.get(relation).map(id => relStore.getIn(['entities', id.toString()]))
}

export function toArray(object) {
    return Object.keys(object).map(key => object[key])
}

export function fromArray(arr) {
    return arr.reduce((acc, item) => ({...acc, [item.id]: item}), {})
}