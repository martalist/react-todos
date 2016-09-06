import { connect } from 'react-redux';
import SummaryBar from '../components/SummaryBar';
import { clearComplete } from '../actions';

const mapStateToProps = (state) => ({
  total: state.length,
  completed: state.filter(t => t.completed).length
});

const mapDispatchToProps = (dispatch) => ({
  clearComplete: () => dispatch(clearComplete())
});

const SummaryBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryBar);

export default SummaryBarContainer;
