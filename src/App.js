import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import ItemListContainer from "./components/ItemListContainer";
import Title from './components/Title';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const data = {
    title: "Mi Tienda",
    amount: 2,
    itemName: "Camisa",
  };
  return (
    <>
      <NavBar title={data.title} />
      <Title/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
  );
}


export default App;
