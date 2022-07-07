import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const data = {
    title: "Mi Tienda",
    amount: 2,
    greeting: "¡Hola Mundo!",
  };
  return (
    <>
      <NavBar title={data.title} />
      <ItemListContainer greeting={data.greeting} />
    </>
  );
}


export default App;
