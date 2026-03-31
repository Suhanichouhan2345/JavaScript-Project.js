
    const product = {
        name : 'suhani chouhan',
        brith : '01/03/2007',
        Subject : 'CSE',
        Price : 20020
    };
   console.log(product);
   
   console.log(product.name = 'palak chouhan'); // direct value set kr deta h
     console.log(product);
   

   product.name = 'palak chouhan';
   console.log(product);
   delete product.name; 
   console.log(product);
   product.name = 'uma';
   product.name = 'suhani';
   product.date= 12; // add also new property

   console.log(product);
   console.log(typeof(product));
   console.log(typeof(name));
   console.log(typeof(product.name));
   console.log(typeof(product.date));
   console.log('suhani'.product);


 let student = {
   name : 'Rahul'
 };
 
 console.log(student);
 let Student = {
    name : 'uma'
 };
 console.log(student);

  var student1 = {
   name : 'Rahul'
 };
   
console.log(student1);
 var Student1 = {
    name : 'uma'
 };
console.log(student1); // top down aproch they follow
  
//----------------------------------------------
 
 const game = {
     palak : 'natasha',
     name : ' suhani',
    903 : 'palalchouhasna bs'
};
     console.log(game);

//------------------------------------------------------

let summary = {
   name : 'Amar singh chouhan',
   age : 34,
   occupation : 'tec',
   work  : ['tec1', 'cleanar'] // outpute come from work : Array(2)
};
console.log(summary);
function summary1(){
   console.log(summary1);
}
summary1();
//console.log(summary.tec1[0]) // error 

