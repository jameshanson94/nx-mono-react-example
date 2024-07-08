import React from 'react';

export default function ViteComponent(props: any) {
  return (
    <div>
      <h1>V1</h1>
      <h1>Hi, I'm ViteComponent</h1>
      <p>Here are my props:</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
