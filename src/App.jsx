import { useState } from 'react'

import './App.css'

import HeaderR from './header.jsx'
// import PlayerDiv from './playerDiv.jsx'
import Select_player from './select_player.jsx'
import { toast } from 'react-toastify'
import FooterF from './footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  const addCradit=()=>{
      setCount(count+10200000);
      toast.success("Credit added to your account",{
        theme:"colored"
      });
  }
  const minusCradit=(a)=>{
    setCount(count-a)
  }
  return (
    <>
    <HeaderR addCradit={addCradit} count={count}></HeaderR>
    <Select_player count={count} minusCradit={minusCradit}></Select_player>
    <div className=' bg-white flex flex-col  z-50 relative'>
    <FooterF></FooterF>
    </div>
    </>

  )
}

export default App
