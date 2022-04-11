import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { ListAllUsers } from './Components/ListAllUsers';
import { CreateNewEmployee } from './Components/CreateNewEmployee';
import { ShowSingleEmployee } from './Components/ShowSingleEmployee';
import { EditEmployeeDetails } from './Components/EditEmployeeDetails';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/employees" element={<ListAllUsers/>}/>
        <Route path="/employees/create" element={<CreateNewEmployee />}/>
        <Route path="/employees/:id" element={<ShowSingleEmployee />}/>
        <Route path="/employees/:id/edit" element={<EditEmployeeDetails />}/>
      </Routes>

    </div>
  );
}

export default App;
