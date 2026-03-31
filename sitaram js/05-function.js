function function1(){
   console.log('helloe');
   console.log(2+20);
}

function1();
function1();


      //parameter // use to change value multiple time 
function function1(parameter1){
   console.log(parameter1 * 0.1);
}
function1(2000);
function1(3000);

// without parameter  // use only sinlge time
function function1(){
   console.log(2000 * 0.1);
}


// also we use multiple parameter
function function1(parameter1 , parameter2){
      console.log(parameter1 ); // undifend outpte has been come .
   console.log(parameter1 * parameter2);
}
function1(2000 , 2.0);
function1(3000); // this outpte is NaN