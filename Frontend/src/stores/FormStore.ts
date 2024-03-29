import { action, makeObservable, observable } from "mobx";
import StoreBase from "./StoreBase";

class FormStore extends StoreBase {
  searchTerm?: string = undefined;
  ageRange?: [number, number] = undefined;
  maxDistance?: number = undefined;
  sortBy?: [string, string] = undefined;
  isShowModal?: boolean = false;

  constructor() {
    super();
    makeObservable(this, {
      searchTerm: observable,
      ageRange: observable,
      maxDistance: observable,
      sortBy: observable,
      isShowModal: observable,

      setSearchTerm: action,
      setAgeRange: action,
      setMaxDistance: action,
      setSortBy: action,
      hideModal: action,
      showModal: action,
    });
  }

  setSearchTerm = (searchTerm?: string) => {
    this.searchTerm = searchTerm;
  };

  setAgeRange = (ageRange?: [number, number]) => {
    this.ageRange = ageRange;
  };

  setMaxDistance = (maxDistance?: number) => {
    this.maxDistance = maxDistance;
  };

  setSortBy = (sortBy?: [string, string]) => {
    this.sortBy = sortBy;
  };

  hideModal = () => {
    this.isShowModal = false;
  };

  showModal = () => {
    this.isShowModal = true;
  };
}

export default FormStore;
