import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import Root from './root';

ReactDom.render(<Root><App /></Root>, document.getElementById('root'));