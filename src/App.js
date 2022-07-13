import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import ItemListContainer from "./components/ItemListContainer";
import Title from './components/Title';

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
      <ItemListContainer itemName={data.itemName} />

    </>
  );
}


export default App;
