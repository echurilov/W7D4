import React from 'react';

export const PokemonIndexItem = (poke) => {
return (
  <li key={poke.id}>
    {poke.pk.name}
    <br/>
    <img src={poke.pk.image_url}></img>
  </li>
  );
};
