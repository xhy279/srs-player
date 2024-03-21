import React from 'react'
import ReactDOM from 'react-dom/client'
import { SrsPlayer } from '../../src'

import '../../src/index.css'

// change the url to your srs server
const url = import.meta.env.VITE_URL
const options = {
  autoPlay: true,
  playsInline: true,
  muted: true,
  controls: true,
}

function App() {
  return (
    <div>
      <h1>SrsPlayer Demo</h1>
      <p>URL: {url} </p>
      <div style={{ width: '320px', height: '240px' }}>
        <SrsPlayer
          url={url}
          options={options}
          rtcOpts={{
            audio: {
              enable: false,
            },
            video: {
              enable: true,
              transceiverOptions: {
                direction: 'recvonly',
              },
            },
          }}
        />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
