import React from 'react';

export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon',
    method: 'GET',
  })
);

export const fetchPokemon = (id) => {
  // debugger;
  return (
  $.ajax({
    url: `api/pokemon/${id}`,
    method: 'GET',
  })
);
};
