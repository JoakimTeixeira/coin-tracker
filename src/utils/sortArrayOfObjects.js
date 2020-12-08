export const sortArrayOfObjects = (arrayOfObjects, searchValue) => {
  const compareValues = ((a, b) => {
    const valueA = a[searchValue].toLowerCase();
    const valueB = b[searchValue].toLowerCase();

    let comparison = 0;

    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }
    return comparison;
  });

  return arrayOfObjects.sort(compareValues);
};
