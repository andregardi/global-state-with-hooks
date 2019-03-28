import React from 'react';
import { useGlobal } from '../hooks/globalState';

const Level3 = (props) => {
  const { index } = props;

  const [globalState, actions] = useGlobal();

  const add1Global = () => {
    actions.counter.add(1);
  };

  return (
    <div
      style={{
        display: 'inline-block',
        height: '100px',
        width: '200px',
        margin: '20px',
        background: '#eee',
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <span>
level 3 component N
        {index}
      </span>
      <p>
counter:
        {globalState.counter}
      </p>
      <button onClick={add1Global}>+1 to global</button>
    </div>
  );
};

export default Level3;
