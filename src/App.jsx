
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import BookList from './customHooks/BookList';
import BookDetails from './customHooks/BookDetails';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      {/* <BookList/> */}
    </>
  )
}

export default App
