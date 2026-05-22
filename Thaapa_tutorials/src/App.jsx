import Home from './hooks/ContextApi/home'
import { BioProvider } from './hooks/ContextApi/index'
import './App.css';

function App() {
  return (
    <BioProvider>
      <Home />
    </BioProvider>
  )
}

export default App
