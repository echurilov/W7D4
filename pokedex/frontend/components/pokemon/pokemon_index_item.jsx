import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

export default class PokemonIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {pokemon} = this.props;
    return (
        <li key={pokemon.id}>
          <Link to={`/pokemon/${pokemon.id}`}>
            {pokemon.name}
            <img src={pokemon.image_url}/>
          </Link>
        </li>
      );
  }
}
