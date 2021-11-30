import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import Movie from './Movie.js'



function MovieList (){


  let [movies, setMovies] = useState(null)


    // const URL = 'https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json';
    // fetch(URL).then(res=>res.json())
    // .then(res=>{
    //     // setMovies(res.data.results);
    //   console.log(res)
    // })


    useEffect(()=>{
          const URL = 'https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json'
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