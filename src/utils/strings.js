export function filterToPath(string) {
  return string.toLowerCase().replaceAll(" ", "_");
}

export function pathToFilter(string) {
  return string
    .replaceAll("_", " ")
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}
