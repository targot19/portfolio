import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactPage from './pages/ContactPage'
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App