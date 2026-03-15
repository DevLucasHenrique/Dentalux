import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Route, Routes } from 'react-router'
import HomePage from './components/home/HomePage'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App