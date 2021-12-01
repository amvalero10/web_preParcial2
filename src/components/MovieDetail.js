import React from 'react'

export default function MovieDetail(props) {

    const {poster,name,description,cast} = props;

    return (
        <>
            <div className='card' >

            <img className='card-image' src={poster} alt={name+' - Image'} />
            <h2>{name}</h2>
            <p>{description}</p>
            <br></br>
            <h5>{cast}</h5>

            </div>
        </>
    );
}
