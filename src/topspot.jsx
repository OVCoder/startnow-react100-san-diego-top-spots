import React from 'react';

export default props => ( //stateless component 
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} className='btn btn-primary btn-lg'>Map</a> 
    </div>
);