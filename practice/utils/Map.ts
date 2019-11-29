export default class Map<K, V> {

    private keys: Array<K>  = [];
    private values: Array<V> = [];

    public put(key: K, value: V): void {
        if (this.has(key)) {
            this.values[this.keys.lastIndexOf(key)] = value;
            return;
        }
        this.keys.push(key);
        this.values.push(value);
    }

    public get(key: K): V{
        return this.values[this.keys.indexOf(key)];
    }

    public has(key: K): boolean {
        return (this.keys.lastIndexOf(key) != -1);
    }

}