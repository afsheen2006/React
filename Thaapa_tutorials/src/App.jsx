import App from './App'
import './index.css'
import { ThemeProvider } from './hooks/Toggle/darklight';
import DarkLight from './hooks/Toggle/darklight';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  )
}
export default App
