import React, { Component } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
	const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
	return (
		<ul className='comment-list'>
			{list}
		</ul>
	);
};

function mapStateToProps(state) {
	return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList);

// CLASS-BASED COMPONENT
// class CommentList extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	renderList() {
// 		this.props.comments.map((comment) => {
// 			return (
// 				<li key={comment}>{comment}</li>
// 			);
// 		})
// 	}
// 	render() {
// 		return (
// 			<ul className='comment-list'>
// 				renderList();
// 			</ul>
// 		);
// 	}
// }

// function mapStateToProps() {
// 	return { comments: state.comments }
// }

// export default connect(mapStateToProps)(CommentList);



// GRIDER VERSION
// const CommentList = (props) => {
//   const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

//   return (
//     <ul className="comment-list">{list}</ul>
//   );
// };

// function mapStateToProps(state) {
//   return { comments: state.comments };
// }

// export default connect(mapStateToProps)(CommentList);




















