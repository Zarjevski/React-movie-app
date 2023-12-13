import React from 'react'

const Genere = ({genres}) => {
  return (
    <div className="genres">
              {genres.map((genre, index) => {
                const { name } = genre;
                return (
                  <div className="genre" key={index}>
                    {name}
                  </div>
                );
              })}
            </div>
  )
}

export default Genere