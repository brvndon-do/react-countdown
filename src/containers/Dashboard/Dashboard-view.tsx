import React, { useState } from 'react';

const DashboardView: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default DashboardView;
