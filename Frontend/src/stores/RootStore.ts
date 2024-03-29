import { IStores } from "./createStore";

export class RootStore implements Partial<IStores> {
  constructor(stores: IStores) {
    const combined = Object.keys(stores).reduce((acc, item) => {
      return {
        ...acc,
        [item]: stores[item as keyof IStores].init(this as unknown as IStores),
      };
    }, {});
    Object.assign(this, { ...combined });
  }
}
