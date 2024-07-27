//main app component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

function App(){
    return (
        <Router>
            <NavBar />
        <Routes>
            <Route path='/' element={ <LandingPage /> }/>
        </Routes>
    </Router>
    );
}

export default App;