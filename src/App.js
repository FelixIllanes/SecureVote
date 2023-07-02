import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Pages/Homepage';
import SideBar from './Components/Side_bar';
import Login from './Components/Login';
import Home from './Pages/Home';
import UserCrudPage from './Pages/UserCrudPage';
import Votacion from './Pages/Votacion';
import Estadistics from './Pages/Estadistics';
import Allvotes from './Pages/AllVotes';
import UserHome from './Pages/UserHome';
import AdminHome from './Pages/AdminHome';
import CreateVote from './Pages/CreateVote';
import CreateCensus from './Pages/CreateCensus';
import PoliticalParty from './Pages/PoliticalParty';
import { AuthProvider } from './store/user';
import Referendum from './Pages/Referendum';
import CreateReferendum from './Pages/CreateReferendum';
import Estadistics2 from './Pages/Estadistics2';
import RefEstadistics from './Pages/RefEstadistics';
import RefEstadistics2 from './Pages/RefEstadistics2';
import CreateUser from './Pages/CreateUser';

function App() {
  return (
    <AuthProvider>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/CreateUser' element={<CreateUser/>}/>

          {/* Rutas para usuario */}
          <Route path='/User' element={<UserHome/>}>
            <Route index element={<Homepage/>}/>
            <Route path='Votacion/:id' element={<Votacion/>}/>
            <Route path='Estadisticas' element={<Estadistics/>}/>
            <Route path='Resultados' element={<Allvotes />}/>
            <Route path='Referendum/:id' element={<Referendum/>}/>
          </Route>

          {/* Rutas para administrador */}
          <Route path='/Admin' element={<Home/>}>
            <Route index element={<AdminHome/>}/>
            <Route path='UserCrud' element={<UserCrudPage/>}/>
            <Route path='CreateVote' element={<CreateVote/>}/>
            <Route path='CreateCensus' element={<CreateCensus/>}/>
            <Route path='PoliticalParty' element={<PoliticalParty/>}/>
            <Route path='Resultados' element={<Allvotes />}/>
            <Route path='Estadisticas/:id' element={<Estadistics/>}/>
            <Route path='Estadisticas2/:id' element={<Estadistics2/>}/>
            <Route path='CreateReferendum' element={<CreateReferendum/>}/>
            <Route path='RefEstadistics/:id' element={<RefEstadistics/>}/>
            <Route path='RefEstadistics2/:id' element={<RefEstadistics2/>}/>
          </Route>

          <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>  
    </div>
    </AuthProvider>
  );
}

export default App;
