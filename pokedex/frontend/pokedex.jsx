import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>hi</h1>,root);
});
