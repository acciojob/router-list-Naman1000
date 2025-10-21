
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ItemList from "./ItemList";
// import ItemDetail from "./ItemDetail";

import ItemList from "./ItemList.jsx";
import ItemDetail from "./ItemDetail.jsx";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<ItemList />} />
       <Route path = "/items/:id"  element = {<ItemDetail />}/>
      </Routes>
    </Router>
    )
}

export default App;
