import React from 'react';
import PropTypes from 'prop-types';
import useGlobal from '../hooks';

const Level3 = (props) => {
  const { index } = props;

  const [state, actions] = useGlobal();

  const add1Global = () => {
    actions.add(1);
    actions.double();
    actions.counterActions.add4();
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
        {state.counter}
      </p>
      <button type="button" onClick={add1Global}>
        +1 to global
      </button>
    </div>
  );
};

Level3.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Level3;
