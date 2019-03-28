import React, { useState } from 'react';
import Level3 from './Level3';

const Level2 = (props) => {
  const { txt } = props.txt;
  console.log(txt);
  const [allLevel3, setAllLevel3] = useState([]);
  const mappedLevel3 = allLevel3.map((level3, index) => <Level3 key={index} index={index} />);
  const newLevel3 = () => {
    const newAllLevel3 = [...allLevel3];
    newAllLevel3.push({});
    setAllLevel3(newAllLevel3);
  };
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid black' }}>
      <h3>level 2 component</h3>
      <button onClick={newLevel3}>Add a Level 3 component</button>
      <br />
      {mappedLevel3}
    </div>
  );
};

export default Level2;
