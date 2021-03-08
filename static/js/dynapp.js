
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
// console.log(d3.selectAll("body"))

// function updatePage() {
//     console.log(`inside updatepage`)
// //   // Use D3 to select the dropdown menu
//    let dropdownMenu = d3.selectAll("#selOption").node([0]);
// //   // Assign the dropdown menu item ID to a variable
//     let dropdownMenuID = dropdownMenu.id;
// //   // Assign the dropdown menu option to a variable
//     let selectedOption = dropdownMenu.value;
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

//Assign id array values to JS object
let idcode= id.names
let chosen = "940"


IDList()
function IDList(){
    var select = document.getElementById("selDataset") 
    for (var i = 0; i < idcode.length; i++) { 
        var optn = idcode[i]; 
        var el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        //console.log(el)
        select.appendChild(el); 
    } 
}


d3.selectAll('#selDataset').on('change',optionChanged)

function optionChanged(){
 let dropdownMenu = d3.select('#selDataset'); 
 chosen = dropdownMenu.property("value") 
 console.log(`${chosen} is the individual`)
 newIndividual()
}


newIndividual()

function newIndividual(){

    for (var ind=0; ind < idcode.length; ind++){
        if(idcode[ind] === chosen){
           chosen=ind 
           console.log(ind)
        }
    } 

//let chosen =idcode[0]
let newt = `Top 10 OTUs in ${chosen}`
console.log(newt)

let chosenId= parseInt(idcode[chosen])
console.log(`chosen_id: ${chosenId}`)

let another = 0
//console.log(`${metaDataid}`)
for ( var bb=0; bb<id.names.length; bb++){ 
    //console.log(`${metaDataid[bb]}`)
    if(metaDataid[bb]===chosenId){
        another = bb
    }
}


console.log(chosen) 
function displayMetadata(){console.log(Object.entries(id.metadata[another]))}
function chooseSample(chosen){chosen =(Object.entries(id.samples[another]));return chosen}

let chosenOtu_ids =[]
let chosenSample_values =[]
let chosenotu_labels =[]

chosenOtu_ids = id.samples[another].otu_ids
//'console.log(`${chosenOtu_ids}`)


displayMetadata()


let top10=[]
let top10_ids=[]
let top10_labels=[]
function selectTop10(){
// correct the js object
chosendata = chooseSample(chosen)
chosenOtu_ids = chosendata[1]
chosenOtu_values = chosendata[2]
chosenOtu_labels = chosendata[3]
chosenOtu_ids = chosenOtu_ids.slice(1,chosenOtu_ids.length)
chosenOtu_values = chosenOtu_values.slice(1,chosenOtu_values.length)
chosenOtu_labels = chosenOtu_labels.slice(1,chosenOtu_labels.length)
//console.log(chosenOtu_labels)
//separate only ten
top10 = chosenOtu_values.map(function(){return chosenOtu_values[0].slice(0,10)});
top10_ids = chosenOtu_ids.map(function(){return chosenOtu_ids[0].slice(0,10)});
top10_labels = chosenOtu_labels.map(function(){return chosenOtu_labels[0].slice(0,10)});
//console.log(top10_labels)
let x = top10_ids[0].toString()
return x
}
fi=selectTop10()
console.log(fi);

newt = `Top 10 OTUs in ${idcode[chosen]}`
initialPlot()
bubbleplot()

function initialPlot(){
// Create the Trace
let tracebar = {
    x: fi,
    y: top10[0],
    text: top10_labels[0],
    name: "species",
    type: "bar"
};
  
  // Create the data array for the plot
  let initial = [tracebar];
  
  // Define the plot layout
  let layout = {
    title: newt,
    xaxis: { title: "id" },
    yaxis: { title: "values" }
  };
  
  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", initial, layout);
}

function bubbleplot(){
var trace1 = {
    x: fi,
    y: top10[0],
    text: top10_labels[0],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
      'rgb(204, 204, 0)', 'rgb(0, 0, 255)',  'rgb(255, 153, 153)', 'rgb(160, 160, 160)',
      'rgb(51, 0, 102)', 'rgb(255, 0, 0)'],
      size: top10[0]
    }
  };
  
  var bubbles = [trace1];
  
  var layout2 = {
    title: newt,
    showlegend: false,
    height: 600,
    width: 1000
  };
  
  Plotly.newPlot('plot', bubbles, layout2);


}

}
d3.select("#refresh").on("change",updatePlotly);

function updatePlotly(){
let newx=[]
let newy=[]

newx =fi
newy =top10[0]
// Note the extra brackets around 'x' and 'y'
  Plotly.restyle("bar-plot", "x", [newx]);
  Plotly.restyle("bar-plot", "y", [newy]);

}




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

