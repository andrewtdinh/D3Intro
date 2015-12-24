'use strict';
// Simple Circle:
var sampleSVG = d3.select("#simpleCircle")
  .append("svg")
  .attr("width", 100)
  .attr("height", 100);

sampleSVG.append("circle")
  .style("stroke", "gray")
  .style("fill", "white")
  .attr("r", 40)
  .attr("cx", 50)
  .attr("cy", 50)
  .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
  .on("mouseout", function(){d3.select(this).style("fill", "white");});
// Animate Circle
var sampleSVG = d3.select("#aniCircle")
  .append("svg")
  .attr("width", 100)
  .attr("height", 100);

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("mouseover", function(){d3.select(this)
      .transition()
        .delay(30)
        .duration(1000)
        .attr("r", 10)
        .attr("cx", 50)
        .style("fill", "blue");
    })
    .on("mouseout", function(){d3.select(this)
      .transition()
        .delay(30)
        .duration(1000)
        .attr("r", 40)
        .attr("cx", 50)
        .style("fill", "white");
    })

// Animation chaining
var sampleSVG = d3.select("#chain")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
    .on("mouseout", function(){d3.select(this).style("fill", "white");})
    .on("mousedown", animate);

function animate() {
    d3.select(this)
      .transition()
        .duration(1000)
        .style("fill", "pink")
        .attr("r", 10)
      .transition()
        .delay(1000)
        .attr("r", 40)
        .style("fill", "white");
};

// A better way to animation chain:
var sampleSVG = d3.select("#chain2")
  .append("svg")
  .attr("width", 100)
  .attr("height", 100);

sampleSVG.append("circle")
  .style("stroke", "gray")
  .style("fill", "white")
  .attr("r", 40)
  .attr("cx", 50)
  .attr("cy", 50)
  .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
  .on("mouseout", function(){d3.select(this).style("fill", "white");})
  .on("mousedown", animateFirstStep);

function animateFirstStep(){
  d3.select(this)
    .transition()
      .delay(0)
      .duration(1000)
      .attr("r", 10)
      .each("end", animateSecondStep);
};

function animateSecondStep(){
  d3.select(this)
    .transition()
      .duration(1000)
      .attr("r", 40);
};

// Multiple animated circles:
var dataset = [],
i = 0;

for(i=0; i<5; i++){
  dataset.push(Math.round(Math.random()*100));
}

var sampleSVG = d3.select('#chain3')
  .append("svg")
  .attr("width", 400)
  .attr("height", 75);

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
