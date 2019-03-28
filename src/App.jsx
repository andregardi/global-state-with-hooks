import React from 'react';
import Level2 from './components/Level2';

const Level2Optimized = React.memo(props => <Level2 {...props} />);

const App = () => (
  <>
    <Level2 txt="level2 1" />
    <Level2Optimized txt="level2 2" />
  </>
);

export default App;
