import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import Movie from './Movie.js'


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
          fetch(URL).then(res=>res.json())
          .then(res=>{
              console.log(res)
              setMovies(res);
          })
      
  }, []);

  


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
    </div>
  );



  };
  

  export default MovieList;