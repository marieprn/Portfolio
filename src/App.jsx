import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import ProjectDetail from './pages/ProjectDetail'
import ScrollToTop from './components/ScrollToTop'

function Layout() {
  const location = useLocation()
  const isDetail = location.pathname.startsWith('/projects/')

  return (
    <>
      <ScrollToTop />
      {!isDetail && (
        <header>
          <Navbar />
        </header>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App