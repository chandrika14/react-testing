import React from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';
import './App.css';

const app = () => {
  return (
  <div className="Container">
    <CommentBox />
    <CommentList />
  </div>
  )
}
export default app;