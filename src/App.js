import React from "react";
import './css/estilos.css';
import Header from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
	<>
	  <Header />
	  <ItemListContainer greeting={{ nombre: 'Andres',  }} />	  
	</>
  );
}
export default App;
