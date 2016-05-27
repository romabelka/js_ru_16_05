import { EventEmitter } from 'events'

export default class BasicStore extends EventEmitter {
    constructor(initialData = []) {
        super()
        this._items = {}
        initialData.forEach(this._add)
    }

    getAll = () => Object.keys(this._items).map(this.getById)

    getById = (id) => this._items[id]

    _delete = (id) => delete this._items[id]

    _add = (item) => this._items[item.id] = item

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