import store from './store'

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!entity[relation] || !relStore) return []

    return entity[relation].map(id => relStore.entities[id])
}

export function toArray(object) {
    return Object.keys(object).map(key => object[key])
}

export function fromArray(arr) {
    return arr.reduce((acc, item) => ({...acc, [item.id]: item}), {})
}