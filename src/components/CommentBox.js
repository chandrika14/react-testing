import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
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
