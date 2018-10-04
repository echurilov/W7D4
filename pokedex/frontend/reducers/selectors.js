import React from 'react';
import _ from 'lodash';

export const selectAllPokemon = (state) => {
  return (_.values(state.entities.pokemon));
};

// export default selectAllPokemon;
