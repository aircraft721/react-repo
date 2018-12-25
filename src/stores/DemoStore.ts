import { observable } from 'mobx';

export interface IDemoStore {
    isOpen?: boolean;
}

class DemoStore implements IDemoStore {
    @observable public isOpen: boolean = false;
}

export { DemoStore };
export const demoStore = new DemoStore();