import { connect } from 'react-redux';
import { Post } from './Post';
import { pickPost } from '../actions';

function mapStateToProps ( state ) {
    return { post: state.post };
}

const mapDispatchToProps = {
    pickPost,
};

export default connect( mapStateToProps, mapDispatchToProps )( Post );
