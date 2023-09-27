import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CstButton } from '../.';

const App = () => {
  return (
    <div>
      <CstButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
