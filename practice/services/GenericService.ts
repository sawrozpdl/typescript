export default class GenericService<E> {

    array : Array<E> = [];

    add(node: E): void {
        this.array.push(node);
    }

    remove(node: E) :void {
        for (let i: number = 0;i < this.array.length;i++) 
            if (this.array[i] === node)
                this.array.splice(i, 1);
    }

    get(index: number): E {
        return this.array[index];
    }

    getAll(): E[] {
        return this.array;
    }

}