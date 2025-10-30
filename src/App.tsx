
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footersection } from './components/Main/Footersection'
import { Mainsection } from './components/Main/Mainsection'


function App() {
  const [open,setOpen]=useState<boolean>(false);
  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <Mainsection open={open}/>
      <Footersection open={open}/>
    </>
  )
}

export default App
