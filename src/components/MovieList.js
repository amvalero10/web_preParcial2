import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import Movie from './Movie.js'
import * as d3 from "d3";


let lang = navigator.language.substring(0,2)

var URL;
const urlEn = 'https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json'
const urlEs = 'https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json'

lang === "es"? URL=urlEs  : URL=urlEn;


function MovieList (){


  let [movies, setMovies] = useState(null)


    // const URL = 'https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json';
    // fetch(URL).then(res=>res.json())
    // .then(res=>{
    //     // setMovies(res.data.results);
    //   console.log(res)
    // })



    useEffect(()=>{
          // const URL = 'https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json'
          if(!navigator.onLine){
            if(localStorage.getItem("pelis") === null) {
              setMovies("Loading...")
            } else {
              setMovies( JSON.parse(localStorage.getItem("pelis")) );
            }
        }else {
          const URL2 = URL;
          fetch(URL2).then(res=>res.json()).then(res=>{
            setMovies(res);
              localStorage.setItem("pelis", JSON.stringify(res) );
          })
      }

          // fetch(URL).then(res=>res.json())
          // .then(res=>{
          //     console.log(res)
          //     setMovies(res);
          // })
      
  }, []);





/////////////////////////////////////////////
// D3 Grafica
/////////////////////////////////////////////


// set the dimensions and margins of the graph
const margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Parse the Data
//d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then( function(data) {

  
d3.json(URL).then( function(data) {

// X axis
const x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(d => d.id))
  .padding(0.2);
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
const y = d3.scaleLinear()
  .domain([0, 10000000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .join("rect")
    .attr("x", d => x(d.id))
    .attr("y", d => y(d.views))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.views))
    .attr("fill", "#69b3a2")

})









  


     return (  
    
    <div>
      <table className="table"  >
        <thead className="thead-dark">
          <tr  >  
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id='Name'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Directed By'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Country'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Budget'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Release'/>
            </th>
            <th scope="col">
              <FormattedMessage id='Views'/>
            </th>
          </tr>
        </thead>
        <tbody>

          {movies && movies.map( (element,i) =>(
            <Movie key={i} movie={element} />
          ))}

        </tbody>
      </table>



      
      <div id="my_dataviz"></div>




    </div>
  );



  };
  

  export default MovieList;