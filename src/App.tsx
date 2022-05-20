import React, { useEffect, useState } from 'react';
import { BrowserRouter , Route, Routes , Link } from "react-router-dom";
import { IndexPage } from './pages/IndexPage';


const App : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" >
        <Route index element ={<IndexPage/>} />
        <Route path="signin" element={<div>SignIn</div>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;