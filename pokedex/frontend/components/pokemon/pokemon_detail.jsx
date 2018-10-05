import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class PokemonDetail extends Component {

  componentDidMount() {
    // debugger;
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    // if (this.Props.match.params.pokemonId != newProps.match.params.pokemonId){
    //   this.props.requestPokemon(newProps.match.params.pokemonId);
    // }
  }

  render() {
    // debugger;
    if (!this.props.pokemon) {return null};
    const {pokemon} = this.props;
    return (
      <ul>
        <li><img src={pokemon.image_url}/></li>
        <li><h3>{pokemon.name}</h3></li>
        <li>Type: {pokemon.type}</li>
      </ul>
    );
  }
}
