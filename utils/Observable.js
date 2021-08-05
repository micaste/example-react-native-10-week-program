export default class Observable {
    constructor(initialValue) {
        this.value = initialValue;
        this.listeners = {};
        this._removeListener = this._removeListener.bind(this);
        this.addListener = this.addListener.bind(this);
        this._notifyListeners = this._notifyListeners.bind(this);
        this.setValue = this.setValue.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    _removeListener(key) {
        Reflect.deleteProperty(this.listeners, key)
    }
    addListener(cb, notifyRightAway = true) {
        const key = Object.keys(this.listeners).length;
        this.listeners[key] = cb;
        if (notifyRightAway) {
            cb(this.value);
        }
        return () => {
            this._removeListener(key);
        }
    }
    _notifyListeners() {
        Object.values(this.listeners).forEach(l => {
            try {
                // We put a try catch so that a listener
                // throwing would not interrupt the notification
                // of others
                l(this.value);
            } catch (error) {
                console.error(`error in a listener`, error)
            }
        })
    }
    setValue(v) {
        this.value = v;
        this._notifyListeners()
    }
    updateValue(updater) {
        this.setValue(updater(this.value));
    }
}