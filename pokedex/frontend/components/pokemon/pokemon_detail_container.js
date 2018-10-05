import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon, requestPokemon} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  const currentId = ownProps.match.params.pokemonId;
  return ({pokemon: state.entities.pokemon[currentId]});
};

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
