function freeShipping(order) {
    let total = 0;
    for (let key in order){
      total += order[key];
    }
    if(total > 50) 
     console.log(true);
    else 
    console.log(false);
  }
  freeShipping({"Laptop":498.9});