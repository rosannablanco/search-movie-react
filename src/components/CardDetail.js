import React from 'react';

import ButtonBack from './ButtonBack';

function CardDetail(props) {
  console.log(props);
  const {Actors, Metascore, Plot, Poster, Title} = props.movie;
  return (
    <div className="card Container-detail">
      <ButtonBack />
      <div className="card-image">
        <img src={Poster} title={Title} alt={Title} />
      </div>
      <div className="card-content">
        <div className="media-content">
          <h1 className="title is-4">{Title}</h1>
          <h3 className="subtitle">
            <span style={{fontWeight: 600}}>Actors:</span> {Actors}
          </h3>
          <span>Score: {Metascore}</span>
          <p>Plot: {Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
