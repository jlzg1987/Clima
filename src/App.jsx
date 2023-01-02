import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
const Dataweather = lazy(() => import('./Complent/Dataweather'))


function App() {
  return (

    <div className="App">
      <Suspense fallback={ <h1>Welcome Weather App</h1>} >
        <Dataweather />
      </Suspense>
    </div>
  )
}

export default App
