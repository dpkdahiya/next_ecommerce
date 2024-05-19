"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-5xl font-bold">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-violet-600 rounded-md p-3"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
