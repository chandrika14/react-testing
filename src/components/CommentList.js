import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const generateKey = (item) => {
  return `${item}_${ new Date().getTime() }`;
}

const commentList = (props) => {
  const list = props.list.map(item => <li key={generateKey(item)}>{item}</li>);
  return (
    <ul>
      {list}
    </ul >
  )
}
commentList.propsTypes = {
  list: PropTypes.array
}
const mapStateToProps = (state) => {
  return {
    list: state.comments
  }
}
export default connect(mapStateToProps, null)(commentList);
