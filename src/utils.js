import store from './store'

export function getRelation(entity, relation) {
    const entityStore = store.getState()[relation]
    if (!entity[relation] || !entityStore) return []

    return entityStore.filter((relEntity) => entity[relation].includes(relEntity.id))
}