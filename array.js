function minMax(arr){
    var returnArr = [];
    var min = arr[0];
    var max = arr[0];

    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }

    returnArr.push(min);
    returnArr.push(max);

     console.log(returnArr);

}
minMax([3,6,7,8,4]);