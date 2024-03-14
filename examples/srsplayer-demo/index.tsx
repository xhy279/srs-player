import React from 'react'
import ReactDOM from 'react-dom/client'
import { SrsPlayer } from '../../src'

import '../../dist/index.css'

const url = import.meta.env.VITE_URL

function App() {
  return (
    <div>
      <h1>SrsPlayer Demo</h1>
      <p>URL: {url} </p>
      <div style={{ width: '320px', height: '240px' }}>
        <SrsPlayer url={url} />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
