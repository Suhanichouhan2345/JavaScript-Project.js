const MyArray = [10,23,34,54];
 console.log(MyArray);
// index value print
 console.log(MyArray[0]);

 //index value change.
 MyArray[0] = 90;
 console.log(MyArray);

 // we can write a arry multiple value.
  const vale = [1,'hello',true,false,{name : 'suhani chouhan' , class : '2nd year'}, [1,2,3]];

  console.log(vale);

  // we can check typeof
  console.log(typeof[1,2,3]); // object [array is an object].

//  Array.isArray() → sirf check karta hai ki value array hai ya nahiuse karte h [Array.isArray()]
   console.log(Array.isArray([7])); 
  console.log(Array.isArray([1,2 , 5])); // true

 console.log(Array.isArray('hello')); // false

 //bss ye bata h ke arry h ya nhi ager arry ko chor ke kuch hota h jese string , boolean they give false.

 // chekc length of an array
 console.log(vale.length);

 // add the vale an arry use puch() method.
 vale.push(90);
 console.log(vale);

 //splice() this method use for remove the value vale.splice(6,90);
 vale.splice(6,90);
 console.log(vale);
 
 //________________________________________________________________________

 //loop
console.log("loop topic");

 let x = 1;
 while(x<=5){
    console.log(x);
    x++;
 }

 console.log("forloop");

 for(let i = 1; i<=5; i++){
       console.log(i);
 }

   let randomNumber = 0;

      while (randomNumber < 0.5) {
        randomNumber = Math.random();
      }

      console.log(randomNumber);

      //--------------------------------------------------

        //loop with arry

      const todoList = [
        'make dinner',
        'wash dishes',
        'watch youtube'
      ];

      for (let i = 0; i < todoList.length; i++) {
        const value = todoList[i];
        console.log(value);
      }
//-----------------
//question
 const nums = [1, 1, 3];
      let total = 0;

      for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        total += num;
      }
      console.log(total);

      const numsDoubled = [];

      for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numsDoubled.push(num * 2);
      }
      console.log(numsDoubled);
//---------------------------------------------------------
 const array1 = [1, 2, 3];
      const array2 = array1.slice();
      array2.push(4);
      console.log(array1);
      console.log(array2);

      const [firstValue, secondValue] = [1, 2, 3];

      for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
          continue;
        }
        console.log(i);
        if (i === 8) {
          break;
        }
      }

      let i = 1;

      while (i <= 10) {
        if (i % 3 === 0) {
          i++;
          continue;
        }
        console.log(i);
        i++;
      }

      function doubleArray(nums) {
        const numsDoubled = [];

        for (let i = 0; i < nums.length; i++) {
          const num = nums[i];
          if (num === 0) {
            return numsDoubled;
          }
          numsDoubled.push(num * 2);
        }
        return numsDoubled;
      }
      console.log(doubleArray([1, 1, 3]));
      console.log(doubleArray([2, 2, 5, 0, 5]));
