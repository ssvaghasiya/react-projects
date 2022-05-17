import Home from '../components/Home'
import { connect } from 'react-redux'
import { changeCount } from '../reduxStore/actions/counts';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
    count: state.count,
});

const ActionCreators = Object.assign(
    {},
    changeCount,
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
    changeCounter: data => dispatch(changeCount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)