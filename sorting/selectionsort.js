const selectionModule = (() => {

  // swap method because its used multiple times
  const swap = (array, index1, index2) => {

    // store a tmp variable at pos index2
    const tmp = array[index2];

    // set value  of index2 to our value at index
    array[index2] = array[index1];

    // set our value of index1 to our stored variable
    array[index1] = tmp;
  };

  // Everything after the return statement is public
  return {

    selectionSort: (array) => {
      for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[min]) {
            min = j;
          }
        }
        if (min !== i) {
          swap(array, i, min);
        }
      }
      return array;
    },
  };
});

const arr = [5, 1, 4, 2, 8];
const selection = selectionModule();
console.log(selection.selectionSort(arr));

module.exports = selectionModule;
