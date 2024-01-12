// TO CHECK IF THE ABSOLUTE DIFFERENCE OF 2 NUMBERS IN AN ARRAY(nums) EQUALS TO A GIVEN NUMBER (k)
function absoluteDifference(nums, k) {
  // Initialize counter variable
  let count = 0;

  //Outer loop:  Iterate over array, using index i till second last element
  for (let i = 0; i < nums.length - 1; i++) {
    //Inner loop:  Iterate from index ( i + 1)  till last element in array
    for (let j = i + 1; j < nums.length; j++) {
      //Calculate difference of array elements at outer and inner loop indexes
      //Calculate absolute of that difference
      let difference = Math.abs(nums[i] - nums[j]);
      //if absolute difference matches target value
      // Return the final count
      if (difference === k) {
        count++;
      }
    }
  }

  // console.log(count);
  return count;
}

//TO CHECK PASS POR FAIL OF A CANDIDATE BASED OF STRING(S), WHICH IS MADE OF THE RESPONSES FROM THE INTERVEW
function evaluation(S) {
  // Initialize Postives = false and Negatives = false
  var pos = "false";
  var neg = "false";

  // Loop over string S and check one character at a time
  for (var i = 0; i < S.length; i++) {
    // if chracter is 'g', set Postives to true
    if (S[i] === "g") {
      pos = "true";
    }
    // if character is 'b', set Negatives to true
    if (S[i] === "b") {
      neg = "true";
    }
  }
  // If postives is true and negaties is false, return "Pass"

  if (pos === "true" && neg === "false") {
    return "Pass";
  } else {
    // Else return "Fail"
    return "Fail";
  }
}

//TO PRINT A LIST OF NUMBER, BUT WITH SOME CONDITIONS WHERE SOME TEXT REPLACES SOME SPECIFIC NUMBERS
//CONDITION 1 -- multiples of 3 it should output "Fizz"
//CONDITION 2 -- multiples of 5 it should output "Buzz"
//CONDITION 3 -- multiples of 3 AND 5 it should output "FizzBuzz"
function fizzBuzz(n) {
  //run a loop for each number upto n numbers.
  let result = [];
  for (let i = 0; i <= n; i++) {
    // check if the no. is a multiple of 3 or 5, print FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
      result[i] = "FizzBuzz";
    }
    // check if the no. is a multiple of 3, print Fizz
    else if (i % 3 === 0) {
      result[i] = "Fizz";
    }
    // check if the no. is a multiple of 5, print Buzz
    else if (i % 5 === 0) {
      result[i] = "Buzz";
    }
    // if no above condition is met, print the number
    else {
      result[i] = i;
    }
  }
  return result;
}

//GIVEN TWO STRINGS RANSOMNOTE AND MAGAZINE, RETURN 1 (TRUE) IF RANSOMNOTE CAN BE CONSTRUCTED BY USING THE LETTERS FROM MAGAZINE AND 0 (FALSE) OTHERWISE.
//EACH LETTER IN MAGAZINE CAN ONLY BE USED ONCE IN RANSOMNOTE.
function ransomNote(ransomnote, magazine) {
  const magazineMap = new Map();
  const ransomMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    if (!magazineMap.has(magazine[i])) {
      magazineMap.set(magazine[i], 1);
      console.log(magazineMap);
    } else {
      magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1);
    }
  }
  for (let i = 0; i < ransomnote.length; i++) {
    if (!ransomMap.has(ransomnote[i])) {
      ransomMap.set(ransomnote[i], 1);
    } else {
      ransomMap.set(ransomnote[i], ransomMap.get(ransomnote[i]) + 1);
    }
  }

  for (const [key, value] of ransomMap) {
    if (!magazineMap.has(key)) {
      return 0;
    }
    if (value <= magazineMap.get(key)) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

// ALICE HAS N CANDIES, WHERE THE ITH CANDY IS OF TYPE CANDYTYPE[I]. ALICE NOTICED THAT SHE STARTED TO GAIN WEIGHT, SO SHE VISITED A DOCTOR.
// THE DOCTOR ADVISED ALICE TO ONLY EAT N / 2 OF THE CANDIES SHE HAS (N IS ALWAYS EVEN). ALICE LIKES HER CANDIES VERY MUCH, AND SHE WANTS TO EAT THE MAXIMUM NUMBER OF DIFFERENT TYPES OF CANDIES WHILE STILL FOLLOWING THE DOCTOR'S ADVICE.
// GIVEN THE INTEGER ARRAY CANDYTYPE OF LENGTH N, RETURN THE MAXIMUM NUMBER OF DIFFERENT TYPES OF CANDIES SHE CAN EAT IF SHE ONLY EATS N / 2 OF THEM.
function distributeCandiesIE(N, candyType) {
  // Create a new Set uniqueCandySet to store the unique types of candies
  let uniqueCandySet = new Set(candyType);
  // Calculate halfLength -> half the length of candyType array
  let halfLength = Math.floor(candyType.length / 2);
  // Loop through candyType array
  for (let i = 0; i < candyType.length; i++) {
    // for each candyType (represented by value in the array)
    // If number of unique candies in the uniqueCandySet is greater than or equal to halfLength
    // Return halfLength

    if (uniqueCandySet.size >= halfLength) {
      return halfLength;
    }

    // Add the current candy type to the uniqueCandySet
    uniqueCandySet.add(candyType[i]);

    // If size of uniqueCandySet is less than halfLength, return size of uniqueCandySet
    if (uniqueCandySet.size < halfLength) {
      return uniqueCandySet.size;
    } else {
      // Else, return halfLength
      return halfLength;
    }
  }
}

//GIVEN A PARAGRAPH OF WORDS, CAPITALISE THE FIRST CHARACTER OF EACH WORD AND RETURN THE PARAGRAPH.
function capitaliseIE(paragraph) {
  // Convert string into character array
  paragraph = [...paragraph];
  // run a loop over all indices from 0 to array length
  for (let i = 0; i < paragraph.length; i++) {
    // if character at index is '.'
    if (paragraph[i] === ".") {
      continue;
    }
    // if index is 0 OR character at (index - 1) is space
    // skip to the next letter (continue)
    // convert the character at index, in the array, to uppercase

    if (i === 0 || paragraph[i - 1] === " ") {
      paragraph[i] = paragraph[i].toUpperCase();
    }
  }
  // Return the result string by converting character array to string
  return paragraph.join("");
}

//GIVEN A SQUARE MATRIX MAT, RETURN THE SUM OF THE MATRIX DIAGONALS.
//ONLY INCLUDE THE SUM OF ALL THE ELEMENTS ON THE PRIMARY DIAGONAL AND ALL THE ELEMENTS ON THE SECONDARY DIAGONAL THAT ARE NOT PART OF THE PRIMARY DIAGONAL.
function diagonalSum(n, matrix) {
  // Initialize variable primaryDiagonalSum to store the sum of primary diagonal
  let primaryDiagonalSum = 0;

  //  Initialize variable secondaryDiagonalSum to store the sum of secondary diagonal
  let secondaryDiagonalSum = 0;

  // Iterate through each row of the matrix
  for (let i = 0; i < matrix.length; i++) {
    //     Add the element from the primary diagonal (i,i )to the primaryDiagonalSum (top-left to bottom-right)
    primaryDiagonalSum += matrix[i][i];

    //     Add the element (i, n-1-i) from the secondary diagonal to the secondaryDiagonalSum (top-right to bottom-left)
    secondaryDiagonalSum += matrix[i][n - 1 - i];
  }

  // if n is odd
  if (n % 2 === 1) {
    //     Subtract the central array element that is part of both diagonals
    return (
      primaryDiagonalSum +
      secondaryDiagonalSum -
      matrix[Math.floor(n / 2)][Math.floor(n / 2)]
    );
  }

  // Return the sum of both diagonals as the final result
  return primaryDiagonalSum + secondaryDiagonalSum;
}

// YOU ARE GIVEN A 0-INDEXED INTEGER ARRAY NUMS OF EVEN LENGTH.
// AS LONG AS NUMS IS NOT EMPTY, YOU MUST REPETITIVELY:
// FIND THE MINIMUM NUMBER IN NUMS AND REMOVE IT. FIND THE MAXIMUM NUMBER IN NUMS AND REMOVE IT. CALCULATE THE AVERAGE OF THE TWO REMOVED NUMBERS. THE AVERAGE OF TWO NUMBERS A AND B IS (A + B) / 2.
function numberOfDistinctAverages(nums) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);
  // Initialize a new set uniqueAvg to store all unique averages
  let uniqueAvg = new Set();

  // Initialize start index pointer to start of array nums
  let start = 0;
  // Initialize end index pointer to end of array nums
  let end = nums.length - 1;

  // Loop through array till start pointer is < end pointer
  while (start < end) {
    // Calculate the average of the current start and end element of array
    let average = (nums[start] + nums[end]) / 2;
    // Add the calculated average to the set UniqueAvg
    uniqueAvg.add(average);
    // Increment start pointer, Decrement end pointer
    start++;
    end--;
  }
  // Return the size of the set UniqueAvg
  return uniqueAvg.size;
}

// YOU ARE GIVEN AN M X N INTEGER GRID ACCOUNTS WHERE ACCOUNTS[I][J] IS THE AMOUNT OF MONEY THE I​​​​​​​​​​​TH​​​​ CUSTOMER HAS IN THE J​​​​​​​​​​​TH​​​​ BANK. RETURN THE WEALTH THAT THE RICHEST CUSTOMER HAS.
// A CUSTOMER'S WEALTH IS THE AMOUNT OF MONEY THEY HAVE IN ALL THEIR BANK ACCOUNTS. THE RICHEST CUSTOMER IS THE CUSTOMER THAT HAS THE MAXIMUM WEALTH.
function richestCustomerWealth(accounts) {
  // Initialize a maxWealth variable to store the wealth calculated.
  let maxWealth = 0;

  // Loop through each customer.
  for (let i = 0; i < accounts.length; i++) {
    // Initialize a variable customerWealth to store the current customer's wealth.
    let customerWealth = 0;

    // Loop through each account of the customer.
    for (let j = 0; j < accounts[i].length; j++) {
      // Change i++ to j++
      customerWealth += accounts[i][j];
    }

    // Update maxWealth if the current customer's wealth is greater.
    if (customerWealth > maxWealth) {
      maxWealth = customerWealth;
    }
  }

  return maxWealth;
}

// WRITE A FUNCTION TO FIND THE LONGEST COMMON PREFIX STRING AMONGST AN ARRAY OF STRINGS.
// IF THERE IS NO COMMON PREFIX, RETURN AN EMPTY STRING "".
function longestCommonPrefix(strs) {
  // Edge case: Check if strs is null or 0 sized
  if (strs === null || strs.length === 0) {
    return "";
  }
  //Loop over the strings and get the length of the minimum string - minLen
  let minLen = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    if (minLen > strs[i].length) {
      minLen = strs[i].length;
    }
  }
  //Initialize a new string commonPrefix to store the common prefix string
  let commonPrefix = "";
  //Run a loop with i from 0 till minLen-1
  for (let i = 0; i < minLen; i++) {
    // Initialize a variable ithCharFirst to the ith character of the first string in the array.
    let ithCharFirst = strs[0][i];

    // Iterate over each of the remaining strings in the array.
    for (let j = 1; j < strs.length; j++) {
      // Check if the ith character of this string matches with ithCharFirst
      if (ithCharFirst !== strs[j][i]) {
        // If not, return the commonPrefix string
        return commonPrefix;
      }
    }

    // Add the ithCharFirst to commonPrefix
    // return commonPrefix
    commonPrefix += ithCharFirst;
  }
  return commonPrefix;
}

//spiralmatrix
function spiralMatrixII(n) {
  //create an array with n elements, and then fill each elements with another array of n elements
  let spiralMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  //initiate the counter
  let counter = 1;

  //initaite the rows/column of the arrays
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  //run throught the loops untill all the required numbers are printed
  while (counter <= n * n) {
    //fill the top row
    for (let i = left; i <= right; i++) {
      spiralMatrix[top][i] = counter;
      counter++;
    }
    top++;
    //fill the right column
    for (let i = top; i <= bottom; i++) {
      spiralMatrix[i][right] = counter;
      counter++;
    }
    right--;
    //fill the bottom row
    for (let i = right; i >= left; i--) {
      spiralMatrix[bottom][i] = counter;
      counter++;
    }
    bottom--;
    // fill the left most
    for (let i = bottom; i >= top; i--) {
      spiralMatrix[i][left] = counter;
      counter++;
    }
    left++;
  }

  return spiralMatrix;
}

function incrementNumber(N, A) {
  //reverse the array
  A.reverse();
  //initialize carry forward value
  let carry = 1;

  for (let i = 0; i < A.length; i++) {
    let sum = A[i] + carry;

    //taking only the units place if the sum is double digit
    A[i] = sum % 10;
    //repplace the tens place digit with carry to add it to next number in array
    carry = Math.floor(sum / 10);
  }

  //if carry is available after the for loop is complete add it to the last of the array
  if (carry) {
    A.push(carry);
  }
  //reverse the current array
  A.reverse();
  return A;
}

function bestTimeToBuyAndSellStocks(prices) {
  //initalize totalprofit variable
  let totalProfit = 0;

  // loop to check if the current value id greater or less than next day value
  for (let i = 0; i < prices.length; i++) {
    //if the current value is less than next day value add difference to total profit
    if (prices[i] < prices[i + 1]) {
      totalProfit += prices[i + 1] - prices[i];
    } else {
      //if the current value is greater than next day value add 0 to total profit
      totalProfit += 0;
    }
  }
  return totalProfit;
}
