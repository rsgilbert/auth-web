import './App.scss';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import { Home } from './components/Home';
import { isLoggedIn } from './api/utils';
import { Signup } from './components/Signup';
import { Confirm } from './components/Confirm'
import { Login } from './components/Login.js';
import { useState, useEffect } from 'react'
import { getLoggedInStatus } from './api/auth';

function LoginApp() {
    return (
        <div className="bg-blue">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/confirm' element={<Confirm />} />
                    <Route path='*' element={<Navigate to='/login' />} />
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
    /**@type {[LoggedInStatus,any]} */
    const [loggedInStatus, setLoggedInStatus] = useState('loading')
    // const [isLoggedInCookie, setIsLoggedInCookie] = useCookies

    useEffect(()=> {
        (async ()=>{
            setLoggedInStatus(await getLoggedInStatus())
        })()
    },[])
    if (loggedInStatus === 'logged_in') return (
        <AuthenticatedApp />
    )
    if (loggedInStatus === 'logged_out')
        return (<LoginApp />)

    return (
        <div>
            <p>Loading ...</p>
        </div>
    )
}

export default App;
