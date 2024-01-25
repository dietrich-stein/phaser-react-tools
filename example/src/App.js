import EventEmitterButton from './components/EventEmitterButton'
import FrameCounter from './components/FrameCounter'
import { GameComponent } from 'phaser-react-tools'
import Overlay from './components/Overlay'
import React from 'react'
import config from './config'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return (
    <div>
      <p>My Phaser Game</p>
      <GameComponent config={config}>
        <Overlay>
          <FrameCounter></FrameCounter>
          <EventEmitterButton></EventEmitterButton>
        </Overlay>
      </GameComponent>
    </div>
  )
}

root.render(<App />);

export default App
