import React from "react";
import { FormattedMessage } from "react-intl";
import { FormattedDate } from "react-intl";



const Movie = (props) => {

  var mill;
  props.movie.budget === 1? mill = "million": mill ="millions";


  return (
    <tr>
      <th scope="row">{props.movie.id}</th>
      <td>{props.movie.name}</td>
      <td>{props.movie.directedBy}</td>
      <td>{props.movie.country}</td>
      <td>
      {props.movie.budget+" "}<FormattedMessage id={mill}/>
        {/* {props.movie.budget} */}
      </td>
      <td>
      <FormattedDate
            value={new Date(props.movie.releaseDate)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
        />
        {/* {props.movie.releaseDate} */}
      </td>
      <td>{new Intl.NumberFormat().format(props.movie.views)}</td>
    </tr>
  );
};

export default Movie;