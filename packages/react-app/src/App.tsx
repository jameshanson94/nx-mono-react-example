import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'shared-ui'
import { ViteComponent, dummyFunction,IName, getFullName, StatefulComponent } from 'react-vite-ui';

function App() {
  const name = { forename: "Joe", surname: "Blogs"} as IName;
  const fullname = getFullName(name);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React v4</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Button>This is my shared button</Button>
        <div>{dummyFunction("ABC")}</div>
        <div>{`fullname test: ${JSON.stringify(fullname)}`}</div>
        <ViteComponent test="test prop">Vite Compoennt</ViteComponent>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <StatefulComponent />
    </>
  )
}

export default App
