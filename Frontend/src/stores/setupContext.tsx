import React, { createContext, useContext } from "react";
import { IStores, createStore } from "./createStore";

export const store = createStore();

let StoreContext = createContext(store);

type Props = {
  children: React.ReactNode;
};
export const StoreProvider = ({ children }: Props) => {
  StoreContext = createContext(store);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): IStores => {
  const storeInstance = useContext(StoreContext);
  if (!storeInstance) {
    throw new Error("You have forgotten to use StoreProvider");
  }
  return storeInstance as IStores;
};
