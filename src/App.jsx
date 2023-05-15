import React from 'react'
import DashBoard from './component/DashBoard'

import { Route, Routes } from 'react-router'
// import Description from './component/description/Description'
import DialogBox from './component/dialogBox/DialogBox'


function App() {
 
// const persistor = persistStore(store)
  return (
    <>
   
     
      <Routes>
       <Route path='/' element={<DashBoard/>} />
       <Route path='/task/:id/' element={<DialogBox/>} />
        
      </Routes>
     
      
    
    </>
  )
}

export default App
