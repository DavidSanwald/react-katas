import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount((lastCount) => lastCount + 1)}>
        inc
      </button>
      <button onClick={() => setCount((lastCount) => lastCount - 1)}>
        dec
      </button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
