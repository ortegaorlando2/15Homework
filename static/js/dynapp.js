
//react to a change in dropdown
let chosen="940"
function optionChanged(){
 let dropdownMenu = d3.select('#selDataset'); 
 chosen = dropdownMenu.property("value") 
 console.log(`${chosen} is the individual`)
}


//^^^^^^^^^^^^^^^^^^^^^ PLOTS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const url =  "https://ortegaorlando2.github.io/15Homework/samples.json";

//Asign JSON data to JS object
d3.json(url).then(function(data) {
    console.log(data);
  
  
  // Promise Pending
  const dataPromise = d3.json(url);
  console.log("Data Promise: ", dataPromise);

  console.log(id)

id =data
// // id=id[["PromiseResult"]]
// console.log(id)
// let metadata = data.metadata
// console.log(metadata)
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

//let chosen = "940"
console.log(metaDataid)


IDList()
function IDList(){
    var select = document.getElementById("selDataset") 
    for (var i = 0; i < idcode.length; i++) { 
        var optn = idcode[i]; 
        var el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        
        select.appendChild(el); 
    } 
}


for (var ind=0; ind < idcode.length; ind++){
    if(idcode[ind] === chosen){
       chosen=ind 
       console.log(ind)
    }
} 


newIndividual()

function newIndividual(){




    //let chosen =idcode[0]
    let newt = `Top 10 OTUs in ${chosen}`
    console.log(newt)

    let chosenId= parseInt(idcode[chosen])
    console.log(`chosen_id: ${chosenId}`)

    let another = 0
    //console.log(`${metaDataid}`)
    for ( var bb=0; bb<id.names.length; bb++){ 
    //console.log(`${metaDataid[bb]}`)
    if(idcode[bb]===chosenId){
        another = bb
    }
}


d3.select("#id").text(`ID ${idcode[another]}`);
d3.select("#et").text(`Ethnicity ${metaEthnicity[another]}`);
d3.select("#gn").text(`Gender ${metaGender[another]}`);
d3.select("#ag").text(`Age ${metaAge[another]}`);
d3.select("#lo").text(`Location ${metaLocation[another]}`);
d3.select("#bt").text(`Belly Button type ${metaBbtype[another]}`);
d3.select("#wf").text(`Washing Frequency ${metaWfreq[another]}`);

console.log(chosen) 
function displayMetadata(){let screenBox = Object.entries(id.metadata[another])
console.log(`Just displayed the metadata ${screenBox}`)
}
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



});
