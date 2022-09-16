import './App.scss';
import { Login } from './components/Login';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import { Register } from './components/Register';
import { Home } from './components/Home';
import { isLoggedIn } from './api/utils';



function LoginApp() {
    return (
        <div className="bg-blue">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='*' element={<Navigate to='/login'/>} />
                </Routes>

            </Router>
        </div>
    );
}

function AuthenticatedApp() {
    return (
        <div className="bg-blue">
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

            </Router>
        </div>
    );
}

function App() {
    if (isLoggedIn()) return (
        <AuthenticatedApp />
    )
    else return (<LoginApp />)
}

export default App;
