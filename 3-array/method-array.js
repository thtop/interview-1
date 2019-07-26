// Coding...
const strings = ['a', 'b', 'c', 'd'];
             //   0    1    2    3 
             // 4*4 = 16 bytes of storage

console.log('Initial: ', strings)

// access
console.log(strings[2]); // O(1)

//push
strings.push('e'); // O(1)
console.log('Last string: ', strings);

//pop 
strings.pop();
strings.pop(); // O(1)
console.log('Last string: ', strings);

//unshift
strings.unshift('x'); // O(n)
console.log('Last string: ', strings);

//splice
strings.splice(2, 0, 'alien'); // O(n/2) => O(n)
console.log('Latest: ', strings);