export class Storage {
    id: number;
    store: string;

    constructor(id:number,store:string) {
        this.id = id;
        this.store = store;
    }

    static from(obj:StorageRow): Storage {
        const storage = new Storage(obj.id,obj.store);
        return storage;
    }
}

export interface StorageRow {
    id: number;
    store: string;
}
