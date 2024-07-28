//main app component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Booking from './components/Booking';
import BuyMeds from './components/BuyMeds';

function App(){
    return (
        <Router>
            <NavBar />
        <Routes>
            <Route path='/' element={ <LandingPage /> }/>
            <Route path='/login' element={ <Login /> }/>
            <Route path='/booking' element={ <Booking /> }/>
            <Route path='/buyMeds' element={ <BuyMeds /> }/>
        </Routes>
    </Router>
    );
}

export default App;