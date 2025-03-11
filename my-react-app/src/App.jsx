import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Routes, Router, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
