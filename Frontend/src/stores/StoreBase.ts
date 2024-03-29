import { IStores } from "./createStore";

class StoreBase {
  rootStore: IStores = {} as IStores;

  constructor() {}

  init(rootStore: IStores) {
    this.rootStore = rootStore;

    return this;
  }
}

export default StoreBase;
