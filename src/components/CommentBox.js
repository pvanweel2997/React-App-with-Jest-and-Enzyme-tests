import React from 'react';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';
import * as actions from 'actions';

class CommentBox extends React.Component {
  state = { comment: '' };

  // our component just got upated

  onChangeHandler = (e) => {
    this.setState({ comment: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.onChangeHandler}
            value={this.state.comment}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));
