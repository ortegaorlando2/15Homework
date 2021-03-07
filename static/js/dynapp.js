
  
  // ###############OTHER OPTIONS##########################
  
  
//   let eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
//     "Brown", "Brown", "Brown", "Green", "Green",
//     "Green", "Green", "Green", "Blue", "Blue",
//     "Blue", "Blue", "Blue", "Blue"];
//   let eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
//     25.7, 24.5, 26.4, 24.2, 28, 26.9,
//     29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];
  
//   // Create the Trace
//   let tracebar = {
//     x: eyeColor,
//     y: eyeFlicker,
//     type: "bar"
//   };
  
//   // Create the data array for the plot
//   let initial = [tracebar];
  
//   // Define the plot layout
//   let layout = {
  
//   // Define the plot layout
//     title: "Eye Color vs Flicker",
//     xaxis: { title: "Eye Color" },
//     yaxis: { title: "Flicker Frequency" }
//   };
  
//   // Plot the chart to a div tag with id "bar-plot"
//   Plotly.newPlot("bar-plot", initial, layout);

//**************************TO LOAD JASON (doesn't work yet)******************/

// url = "https://ortegaorlando2.github.io/15Homework/data/samples/"

// // Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   console.log(data);
// });

// // Promise Pending
// const dataPromise = d3.json(bacteria);
// console.log("Data Promise: ", dataPromise);

// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code.
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout( function() {
//       resolve("Success!")  // Yay! Everything went well!
//     }, 250)
//   })
  
//   myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage)
//   });
  
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&READ JSON&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const url = "https://api.spacexdata.com/v2/launchpads";

// // Fetch the JSON data and console log it
// d3.json(url).then(function(spacex) {
//   console.log(spacex);
// });

// // Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

//^^^^^^^^^^^^^^^^^DROPDOWN^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// d3.selectAll("body").on("change", updatePage);

// function updatePage() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.selectAll("#selDataset").node();
//   // Assign the dropdown menu item ID to a variable
//   let dropdownMenuID = "516"//id.name;
//   // Assign the dropdown menu option to a variable
//   let selectedOption = "516"//dropdownMenu.value;
// }
//   console.log(dropdownMenuID);
//   console.log(selectedOption);


//   d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   let dataset = dropdownMenu.property("value");

//   <option value="option1">Menu Option 1</option>
//   <option value="option2">Menu Option 2</option

//   if (dataset === 'dataset1') {
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 4, 8, 16];
//   }

//   else if (dataset === 'dataset2') {
//     x = [10, 20, 30, 40, 50];
//     y = [1, 10, 100, 1000, 10000];
//   }

//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
// }

// init();

//^^^^^^^^^^^^^^^^^^^^^ PLOTS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//Asign JSON data to JS object
let id = data[0]
//Assign id array values to JS object
let idcode= id.names[23]
console.log(idcode)



let chosenId= parseInt(id.names[14])
console.log(`chosen_id: ${chosenId}`)

let metaDataid = []
let metaEthnicity = []
let metaGender = []
let metaAge = []
let metaLocation = []
let metaBbtype = []
let metaWfreq = []

id.metadata.forEach(function (element){let idNumber=element.id; metaDataid.push(idNumber)})
id.metadata.forEach(function (element){let idNumber=element.ethnicity; metaEthnicity.push(idNumber)})
id.metadata.forEach(function (element){let idNumber=element.gender; metaGender.push(idNumber)})
id.metadata.forEach(function (element){let idNumber=element.age; metaAge.push(idNumber)})
id.metadata.forEach(function (element){let idNumber=element.location; metaLocation.push(idNumber)})
id.metadata.forEach(function (element){let idNumber=element.bbtype; metaBbtype.push(idNumber)})
id.metadata.forEach(function (element){let idNumber=element.wfreq; metaWfreq.push(idNumber)})

let samplesId = []
let samplesOtu_ids = []
let samplesSample_values = []
let samplesOtu_labels = []

id.samples.forEach(function (element){let idNumber=element.id; samplesId.push(idNumber)})
id.samples.forEach(function (element){let idNumber=element.id; samplesOtu_ids.push(idNumber)})
id.samples.forEach(function (element){let idNumber=element.id; samplesSample_values.push(idNumber)})
id.samples.forEach(function (element){let idNumber=element.id; samplesOtu_labels.push(idNumber)})



let another = 0
//console.log(`${metaDataid}`)
for ( var bb=0; bb<id.names.length; bb++){ 
    //console.log(`${metaDataid[bb]}`)
    if(metaDataid[bb]===chosenId){
        id.metadata.forEach(function () {console.log(`${id.metadata[bb]}`)})
        another = bb
    }
}

chosen=[]
function displayMetadata(){console.log(Object.entries(id.metadata[another]))}
function chooseSample(chosen){chosen =(Object.entries(id.samples[another]));return chosen}

let chosenOtu_ids =[]
let chosenSample_values =[]
let chosenotu_labels =[]

chosenOtu_ids = id.samples[another].otu_ids
//'console.log(`${chosenOtu_ids}`)


displayMetadata()
chosendata = chooseSample(chosen)
chosenOtu_ids = chosendata[1]
chosenOtu_values = chosendata[2]

chosenOtu_labels = chosendata[3]
chosenOtu_ids = chosenOtu_ids.slice(1,chosenOtu_ids.length)
chosenOtu_values = chosenOtu_values.slice(1,chosenOtu_values.length)
chosenOtu_labels = chosenOtu_labels.slice(1,chosenOtu_labels.length)
console.log(chosenOtu_labels)

let top10 = chosenOtu_values.map(function(){return chosenOtu_values[0].slice(0,10)});
let top10_ids = chosenOtu_ids.map(function(){return chosenOtu_ids[0].slice(0,10)});
let top10_labels = chosenOtu_labels.map(function(){return chosenOtu_labels[0].slice(0,10)});
console.log(top10_labels)
let x = top10_ids[0].toString()


console.log(x);



// Create the Trace
let tracebar = {
    x: x,
    y: top10[0],
    text: top10_labels[0],
    name: "species",
    type: "bar"
};
  
  // Create the data array for the plot
  let initial = [tracebar];
  
  // Define the plot layout
  let layout = {
  
  // Define the plot layout
    title: "Top 10 OTUs",
    xaxis: { title: "id" },
    yaxis: { title: "values" }
  };
  
  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", initial, layout);







//   // 2. Use filter() to pass the function as its argument
//   let filteredMovies = topMovies.filter(filterMovieRatings);
  
//   //  Check to make sure your are filtering your movies.
//   console.log(filteredMovies);
  
//   // 3. Use the map method with the arrow function to return all the filtered movie titles.
//   let titles = filteredMovies.map(movies =>  movies.title);
  
//   //  Check your filtered movie titles
//   console.log(titles);
  
//   // 4. Use the map method with the arrow function to return all the filtered movie metascores.
//   let ratings = filteredMovies.map(movies => movies.metascore);
  
//   //  Check your filtered metascores.
//   console.log(ratings);
  
//   // 5. Create your trace.
//   let trace = {
//     x: titles,
//     y: ratings,
//     type: "bar"
//   };
  
//   // 6. Create the data array for our plot
//   let data = [trace];
  
//   // 7. Define our plot layout
//   let layout = {
//     title: "The highest critically acclaimed movies",
//     xaxis: { title: "Title" },
//     yaxis: { title: "Metascore (Critic) Rating"}
//   };
  
//   // 8. Plot the chart to a div tag with id "bar-plot"
//   Plotly.newPlot("bar-plot", data, layout);

