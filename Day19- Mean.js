function mean(arr) {
    var total = 0;
    var average;
    for (var i = 0; i < arr.length; i++) {
      total = (total + arr[i]);
    }
    average = (total/arr.length)
    
    average = parseFloat(average)
    
    average = Math.round(average * 100) / 100
  
  console.log(average);
  }
  mean([1,2,3,4]);