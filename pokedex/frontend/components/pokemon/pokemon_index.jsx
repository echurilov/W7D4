import React, {Component} from 'react';
import {Route} from 'react-router';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

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
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}
