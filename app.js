url = "https://ortegaorlando2.github.io/15Homework/"

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// // Promise Pending
// const dataPromise = d3.json(bacteria);
// console.log("Data Promise: ", dataPromise);
