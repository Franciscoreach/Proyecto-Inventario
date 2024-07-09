import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { PaginaLogin } from '../src/pages/PaginaLogin.jsx'
import { PaginaRegistro } from '../src/pages/PaginaRegistro.jsx'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}/> 
        <Route path='/login' element={<PaginaLogin />}/> 
        <Route path='/registro' element={<PaginaRegistro />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
