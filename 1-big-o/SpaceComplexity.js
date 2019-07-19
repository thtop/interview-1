// Space Complexity
function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boooooo!');
    }
}
boooo([1,2,3,4,5]);

/**
 * Time Complexity ==> O(n)
 * - Care about how big the input is.
 * 
 * Space Complexity ==> ?
 * - Don't care how big the input is.
 * - let i = 0; ==> O(1)
 */

 function arrayOfHiTimes(n) {
     let hiArray = [];
     for (let i = 0; i < n; i++) {
         hiArray[i] = 'hi';
     }
     return hiArray;
 }
 console.log(arrayOfHiTimes(6));

 /** Space Complexity
  * - let i = 0;
  * - hiArray[i]
  * 
  * ==> O(n)
  */