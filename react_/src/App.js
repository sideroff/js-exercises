import React, { useState } from 'react';


function App() {
  const [counter] = useState();

  return (
    <div>
      <h3>counter: </h3>
      {counter}
    </div>
  );
}

export default App;
