'use strict';
// Simple Circle:
var sampleSVG = d3.select("#simpleCircle")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50);

sampleSVG.append("circle")
  .style("stroke", "gray")
  .style("fill", "white")
  .attr("r", 20)
  .attr("cx", 25)
  .attr("cy", 25)
  .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
  .on("mouseout", function(){d3.select(this).style("fill", "white");});
// Animate Circle
var sampleSVG = d3.select("#aniCircle")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50);

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 20)
    .attr("cx", 25)
    .attr("cy", 25)
    .on("mouseover", function(){d3.select(this)
      .transition()
        .delay(30)
        .duration(1000)
        .attr("r", 5)
        .attr("cx", 25)
        .style("fill", "blue");
    })
    .on("mouseout", function(){d3.select(this)
      .transition()
        .delay(30)
        .duration(1000)
        .attr("r", 20)
        .attr("cx", 25)
        .style("fill", "white");
    })

// Animation chaining
var sampleSVG = d3.select("#chain")
    .append("svg")
    .attr("width", 50)
    .attr("height", 50);

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 20)
    .attr("cx", 25)
    .attr("cy", 25)
    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
    .on("mouseout", function(){d3.select(this).style("fill", "white");})
    .on("mousedown", animate);

function animate() {
    d3.select(this)
      .transition()
        .duration(1000)
        .style("fill", "pink")
        .attr("r", 5)
      .transition()
        .delay(1000)
        .attr("r", 20)
        .style("fill", "white");
};

// A better way to animation chain:
var sampleSVG = d3.select("#chain2")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50);

sampleSVG.append("circle")
  .style("stroke", "gray")
  .style("fill", "white")
  .attr("r", 20)
  .attr("cx", 25)
  .attr("cy", 25)
  .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
  .on("mouseout", function(){d3.select(this).style("fill", "white");})
  .on("mousedown", animateFirstStep);

function animateFirstStep(){
  d3.select(this)
    .transition()
      .delay(0)
      .duration(1000)
      .attr("r", 5)
      .each("end", animateSecondStep);
};

function animateSecondStep(){
  d3.select(this)
    .transition()
      .duration(1000)
      .attr("r", 20);
};

// Multiple animated circles:
var dataset = [],
i = 0;

for(i=0; i<5; i++){
  dataset.push(Math.round(Math.random()*500));
}

var sampleSVG = d3.select('#chain3')
  .append("svg")
  .attr("width", 400)
  .attr("height", 50);

sampleSVG.selectAll("circle")
    .data(dataset)
  .enter().append("circle")
    .style("stroke", "gray")
    .style("fill", "blue")
    .attr("height", 40)
    .attr("width", 75)
    .attr("cx", function(d, i){return 20 + i * 80;})
    .attr("cy", 20)
    .attr('r', function(d){return Math.sqrt(d);});

// Multiple circles, not animated
var radii = [15, 25, 35];
var circle = d3.selectAll(".demoCircles")
circle.style('fill', 'steelblue');
circle.data(radii);
circle.attr('r', function(data){return data;})
circle.attr('cx', function(data, i){return i * 100 + 30;})

//Binding 2D data:
var dtset = [],
tmpDataset = [],
i, j;

for (i = 0; i < 5; i++) {
  for (j = 0, tmpDataset = []; j < 3; j++) {
    tmpDataset.push("("+j+", "+i+")");
  }
  dtset.push(tmpDataset);
}

d3.select("#bind2D")
  .append("table")
  .style("border-collapse", "collapse")
  .style("border", "2px black solid")

  .selectAll("tr")
  .data(dtset)
  .enter().append("tr")

  .selectAll("td")
  .data(function(d){return d;})
  .enter().append("td")
  .style("border", "1px black solid")
  .style("padding", "10px")
  .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
  .on("mouseout", function(){d3.select(this).style("background-color", "white")})
  .text(function(d){return d;})
  .style("font-size", "12px");

//Binding 2D data from an external csv file:
d3.text("../data/auto_mpg.csv", function(datasetText) {

  var parsedCSV = d3.csv.parseRows(datasetText);

  var sampleHTML = d3.select("#bindExternalData")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")

    .selectAll("tr")
    .data(parsedCSV)
    .enter().append("tr")

    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "5px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
    .on("mouseout", function(){d3.select(this).style("background-color", "white")})
    .text(function(d){return d;})
    .style("font-size", "12px");
});
