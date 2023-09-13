//To check if the difference of 2 numbers in an array(nums) equals to a given number(k)
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

//check if 2 strings(s and t) are anagram
function validAnagram(s, t) {
  // check if length is equal or not if unequal return false
  let ifAnagram = "";
  if (s.length !== t.length) {
    ifAnagram = "false";
    console.log(ifAnagram);
    return;
  }

  //create a new hash map for both string
  const string1Map = new Map();
  const string2Map = new Map();

  //loop through first string and map the elements
  for (let i = 0; i < s.length; i++) {
    if (!string1Map.has(s[i])) {
      string1Map.set(s[i], 1);
    } else {
      string1Map.set(s[i], string1Map.get(s[i]) + 1);
    }
  }
  //loop through first string and map the elements
  for (let i = 0; i < t.length; i++) {
    if (!string2Map.has(t[i])) {
      string2Map.set(t[i], 1);
    } else {
      string2Map.set(t[i], string2Map.get(t[i]) + 1);
    }
  }

  for (const [key, value] of string1Map) {
    if (string2Map.has(key) && value === string2Map.get(key)) {
      ifAnagram = "true";
      console.log(ifAnagram);
      return;
    } else {
      ifAnagram = "false";
      console.log(ifAnagram);
      return;
    }
  }
}
let str1 = "cart";
let str2 = "trac";
validAnagram(str1, str2);

//to check passing or failure of a candidate based of a string(S), which is made of the responses of its interview
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
            result[i] = 'FizzBuzz'
        }
        // check if the no. is a multiple of 3, print Fizz 
        else if (i % 3 === 0) {
            result[i] = 'Fizz'
        }
        // check if the no. is a multiple of 5, print Buzz 
        else if (i % 5 === 0) {
            result[i] = 'Buzz'
        }
        // if no above condition is met, print the number
        else {
            result[i] = i
        }
    }
    return result;
}