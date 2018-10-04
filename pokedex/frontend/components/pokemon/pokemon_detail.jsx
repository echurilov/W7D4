import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class PokemonDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.requestPokemon();
  }

  render() {
    debugger;
    const {pokemon} = this.props;
    console.log(this.props);
    return (
      <ul>
        <li><img src={pokemon.image_url}/></li>
        <li><h3>{pokemon.name}</h3></li>
        <li>Type: {pokemon.type}</li>
      </ul>
    );
  }
}
