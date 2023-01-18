import './App.css';

//* Routing
import { BrowserRouter, Routes, Route } from "react-router-dom"

//* Components 
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';
import NavBar from './components/NavBar';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      {/* <h1>CRUD operation in MERN - The frontend part</h1> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<CodeforInterview />} />
        <Route path='/allusers' element={<AllUsers />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/edituser/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
