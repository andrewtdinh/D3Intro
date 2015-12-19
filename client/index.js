'use strict';
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
        .attr("cx", 30)
        .style("fill", "blue");
    })
