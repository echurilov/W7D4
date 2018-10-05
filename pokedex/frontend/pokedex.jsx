import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestAllPokemon, requestPokemon} from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>,root);
});
