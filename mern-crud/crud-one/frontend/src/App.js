import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <h1>CRUD operation in MERN - The frontend part</h1> */}
      <NavBar />
      <AddUser />
    </div>
  );
}

export default App;
