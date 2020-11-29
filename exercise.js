function reorderZeros(arr) {
    if(Array.isArray(arr)){
        var arr_0 = [];
        var arr_a = [];
        for (element of arr) {
            if (element == 0){
                arr_0.push(element);
            } else if (!isNaN(element)){
                arr_a.push(element);
            }
        }
        arr = arr_a.concat(arr_0);
    } else {
        arr = [];
    }
    return arr;
}

(function () {
  const res = reorderZeros([1, 2, 0, 0, 3, 42, 0, 34, 25, 0, 0, 2, 3, 5, 2, 0]);
  console.log(res);
})()

module.exports = reorderZeros;
