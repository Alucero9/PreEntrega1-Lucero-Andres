import React from "react";
import './css/estilos.css';
import Header from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
	
	<BrowserRouter>
	  <Header />
	  <ItemListContainer/>	  
	</BrowserRouter>
  );
}
export default App;
