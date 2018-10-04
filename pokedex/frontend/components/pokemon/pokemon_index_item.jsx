import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class PokemonIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {pokemon} = this.props;
    console.log(this.props);
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
