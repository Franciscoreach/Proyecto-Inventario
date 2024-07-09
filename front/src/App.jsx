import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { PaginaLogin } from '../src/pages/PaginaLogin.jsx'
import { PaginaRegistro } from '../src/pages/PaginaRegistro.jsx'
import { PaginaDashboard } from '../src/pages/Dashboard.jsx'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}/> 
        <Route path='/login' element={<PaginaLogin />}/> 
        <Route path='/registro' element={<PaginaRegistro />}/> 
        <Route path='/dashboard' element={<PaginaDashboard />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
