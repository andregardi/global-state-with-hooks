import React, { useState } from 'react';
import Level3 from './Level3';

const Level2 = () => {
  const [allLevel3, setAllLevel3] = useState([]);
  const newLevel3 = () => {
    const newAllLevel3 = [...allLevel3];
    newAllLevel3.push({});
    setAllLevel3(newAllLevel3);
  };
  const deleteLevel3 = (index) => {
    const newAllLevel3 = [...allLevel3];
    newAllLevel3.splice(index, 1);
    setAllLevel3(newAllLevel3);
  };
  const mappedLevel3 = allLevel3.map((level3, index) => (
    <Level3 key={index} index={index} deleteMe={() => deleteLevel3(index)} />
  ));

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid black' }}>
      <h3>level 2 component</h3>
      <button type="button" onClick={newLevel3}>
        Add a Level 3 component
      </button>
      <br />
      {mappedLevel3}
    </div>
  );
};

export default Level2;
