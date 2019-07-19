function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) { // O(n)
      console.log(number);
    });
  
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) { // O(n^2)
        console.log(firstNumber + secondNumber);
      });
      console.log('*** *** ***');
    });
  }
  
  printAllNumbersThenAllPairSums([1,2,3,4,5])

  /**
   * O(n + n^2)
   * O(n^2)
   * 
   * O(x^2 + 3x + 100 + x/2)
   * O(x^2)
   * 
   * O(x^3) if 3 nested loops
   */