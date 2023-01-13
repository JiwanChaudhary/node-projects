import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./components/Main";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
    const user = localStorage.getItem('token');
    return (
        <Routes>
            {user && <Route path="/" exact element={<Main />} />}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Navigate replace to='/login' />} />
        </Routes>
    );
}

export default App;