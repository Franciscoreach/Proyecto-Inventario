import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { PaginaLogin } from '../src/pages/PaginaLogin.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}/> 
        <Route path='/login' element={<PaginaLogin />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
