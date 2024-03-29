export const camelCaseToTitleCase = (str: string) =>
  str
    .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
    .replace(/^./, (str) => str.toUpperCase());

export const convertToTitleCase = (input: string) =>
  input
    .split(/(?=[A-Z])/)
    .map(camelCaseToTitleCase)
    .join(" ");
