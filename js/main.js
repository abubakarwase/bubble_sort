var arr = [37,45,29,8,12,88,-3];
var nearlySorted = [8,1,2,3,4,5,6,7];
bubbleSort(arr);
optimizeBubbleSort(nearlySorted);

console.log(arr);
console.log("after nearly sorted");
console.log(nearlySorted);

function bubbleSort(arr){
    for(var i=arr.length; i>0; i--){
        for( var j=0; j<i-1; j++){
            // un comment this line to see comparisons on each iteration
            console.log(arr,arr[j],arr[j+1]); 
            if(arr[j]>arr[j+1]){
                //swap
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        // console.log("one pass completed")
    }
    return arr;
}
function optimizeBubbleSort(arr){
    var noSwaps;
    for(var i=arr.length; i>0; i--){
        noSwaps = true;
        for( var j=0; j<i-1; j++){
            console.log(arr,arr[j],arr[j+1]); 
            if(arr[j]>arr[j+1]){
                //swap
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
