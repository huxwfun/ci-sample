import logo from './logo.svg';
import './App.css';
import Button from './components/button'
import { dog } from './api'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState(null)
  return (
    <div className="App">
      <header className="App-header">
        {url ?
          <img src={url} className="App-logo" alt="random dog"/> :
          <img src={logo} className="App-logo rotate" alt="logo" />
        }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={async () => {
          const d = await dog()
          setUrl(d)
        }}>
          获取随机相片
        </Button>
      </header>
    </div>
  );
}

export default App;
