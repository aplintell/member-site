import { Deserializable } from './deserializable';

export class Customer implements Deserializable{

    customerId: number;
    loginId: string;
    password: string;

    constructor(customerId?: number, loginId?: string, password?: number[]){
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}