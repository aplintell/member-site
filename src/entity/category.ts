import { Deserializable } from './deserializable';

export class Category implements Deserializable{

    categoryId: number;
    name: string;

    constructor(categoryId?: number, name?: string){
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}