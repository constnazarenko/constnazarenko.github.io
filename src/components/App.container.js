import { connect } from 'react-redux';
import { App } from './App';
import { setPosts } from '../actions';

const mapStateToProps = ( state ) => {
    return { posts: state.posts };
};

const mapDispatchToProps = {
    setPosts,
};

export default connect( mapStateToProps, mapDispatchToProps )( App );
