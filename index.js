// Import stylesheets
import './style.css';

// Write Javascript code!
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len ; i++) {
    for (var j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arrwithout_sort = [1,4,10,9,5,4,6,2,3];
var Sorted_array = bubbleSort(arrwithout_sort);
console.log("result", Sorted_array)

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Bubble Sorting </h1>
</br><h4>Array without Sort [1,4,10,9,5,4,6,2,3]
</br><h4>JArray after sort  ${Sorted_array}</h4>`;