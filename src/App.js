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
import { useCookies } from 'react-cookie'


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
    const [cookies, setCookie] = useCookies(['loggedInStatus'])
    /** @type {LoggedInStatus} */
    const loggedInStatus = cookies.loggedInStatus
    useEffect(() => {
        (async () => {
            console.log(await getLoggedInStatus())
            setCookie('loggedInStatus', await getLoggedInStatus())
        })()
    }, [])

    if (loggedInStatus === 'logged_in') return (
        <AuthenticatedApp />
    )
    else return (<LoginApp />)
}

export default App;
