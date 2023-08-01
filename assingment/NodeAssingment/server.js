const express = require("express");
const app = express();

const PORT = 3000;

//  Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests. You can use any library or framework of your choice.
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});

//Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
const findSum = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not array");
  }
  let sum = 0;
  arr.forEach((ele) => {
    if (typeof ele !== "number") {
      throw new Error("Array contains non-integer element");
    }
    sum += ele;
  });
  return sum;
};
//Example :
const inputArr = [1, 2, 3, 4, 5];
const result = findSum(inputArr);
console.log(result);

// Task 3: Asynchronous File Handling
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it. The script should print the total word count to the console.
const fs = require("fs");
const filename = "data.txt";

fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.log("error in reading the file", err.message);
    return;
  }
  const wordcount = countWord(data);
  console.log("Total word count: ", wordcount);
});

const wordcount = (text) => {
  const words = text.split(/\s+/);
  return words.filter((e) => e != "").length;
};
