import FormStore from "./FormStore";
import { RootStore } from "./RootStore";

export interface IStores {
  form: FormStore;
}

export const createStore = () => {
  return new RootStore({
    form: new FormStore(),
  });
};
