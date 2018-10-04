import React, {Component} from 'react';
import {Route} from 'react-router';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';

export default class PokemonIndex extends Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const {pokemon} = this.props;
    const pokemonItems = pokemon.map(poke =>
      <PokemonIndexItem
        key={poke.id}
        pokemon={poke} />
    );

    return(
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route path='/pokemon/:pokemonId' component={PokemonDetail} />
      </section>
    );
  }
}
