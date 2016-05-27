import { EventEmitter } from 'events'
import DataWrapper from './DataWrapper'

export default class BasicStore extends EventEmitter {
    constructor(stores, initialData = []) {
        super()
        this._items = {}
        this._stores = stores
        initialData.forEach(this._add)
    }

    getAll = () => Object.keys(this._items).map(this.getById)

    getById = (id) => this._items[id]

    _delete = (id) => delete this._items[id]

    _add = (item) => this._items[item.id] = new DataWrapper(item, this)

    getStores = () => this._stores

    addChangeListener(callback) {
        this.on('SOME_INTERNAL_EVENT', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('SOME_INTERNAL_EVENT', callback)
    }

    emitChange() {
        this.emit('SOME_INTERNAL_EVENT')
    }
}