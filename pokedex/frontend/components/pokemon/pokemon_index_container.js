import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon, requestPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';


const mapStateToProps = (state, ownProps) => ({
  pokemon: selectAllPokemon(state),
  currentId: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  requestPokemon: () => dispatch(requestPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
