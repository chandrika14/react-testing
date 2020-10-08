import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { save } from '../actions';

const  CommonBox =  (props) => {
  const [value, setValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmitAction(value);
    setValue('');
  }
  return (
    <form className="CommentBox" onSubmit={(e) => handleSubmit(e)}>
      <h4>Add a Comment</h4>
      <textarea value={value} onChange={(event) => setValue(event.target.value)}/>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}
CommonBox.propTypes = {
  handleSubmitAction: PropTypes.func
};
const mapDispatchToProp = (dispatch) => {
  return {
    handleSubmitAction: (value) => dispatch(save(value))
  }
}
export default connect(null, mapDispatchToProp)(CommonBox);
