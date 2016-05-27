export default class DataWrapper {
    constructor(item, store) {
        Object.assign(this, item)
        this._store = store
    }

    getRelation(relation) {
        const stores = this._store.getStores()
        const relStore = stores[relation]
        if (!relStore || !this[relation]) return []
        return this[relation].map(relStore.getById)
    }
}