export const camelCaseToTitleCase = (str: string) =>
  str
    .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
    .replace(/^./, (str) => str.toUpperCase());

export const convertToTitleCase = (input: string) =>
  input
    .split(/(?=[A-Z])/)
    .map(camelCaseToTitleCase)
    .join(" ");

export const SUBMIT = "Submit";
export const LOADING = "Loading...";
export const NO_NEIGHBORHOODS = "No neighborhoods found";
export const FILTER = "Filter";
export const SEARCH = "Search...";
export const HOODS = "Hoods";
export const FINDER = "Finder";
