"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 className="text-5xl font-bold">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-violet-600 rounded-md p-3"
      >
        Increment
      </button>
    </main>
  );
}
