import Image from "next/image";
import React from 'react';
import Recipe from 'Recipe';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>I am here.</p>
        <button>
      I don't do anything
    </button>
      </div>
    </main>
  );
}
