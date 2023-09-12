import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainet/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
  
function App() {
  const [estado, funcionCambiarEstado] = useState(0)
  const addCount = () =>{
    funcionCambiarEstado(estado + 1)
  }
  
  return (
    <>
      <BrowserRouter>
        <Navbar count={estado} funcionOnClick={addCount}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/series/:sName' element={<ItemListContainer/>}/>
          <Route path='/details/:pid' element={<ItemDetailContainer/>}/>    
        </Routes>  
      </BrowserRouter> 
    </>
  )
}

export default App
