function freeShipping(order) {
    let total = 0;
    for (let key in order){
      total += order[key];
    }
    if(total > 10000) 
     console.log(true);
    else 
    console.log(false);
  }
  freeShipping({"Laptop":49890});
