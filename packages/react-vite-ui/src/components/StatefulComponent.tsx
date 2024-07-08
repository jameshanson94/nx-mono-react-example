
import React, { useState } from "react";

export default function StatefulComponent() {
  const [state, setState] = useState(0);

  return (
    <div>
      <p>v1 {state}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
    </div>
  );
}
