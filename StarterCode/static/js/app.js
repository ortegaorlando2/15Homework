bacteria = "/StarterCode/samples.js"

// Fetch the JSON data and console log it
d3.json(bacteria).then(function(data) {
  console.log(data);
});

// // Promise Pending
// const dataPromise = d3.json(bacteria);
// console.log("Data Promise: ", dataPromise);
