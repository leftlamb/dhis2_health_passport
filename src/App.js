import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {Home, Patient} from './pages'

const MyApp = () => {
    const [patient, setPatient] = useState({
        name: "",
        pob: "",
        contactNumber: "",
        id: "",
    })
    const [redirect, setRedirect] = useState('/')

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home 
                        patient={patient}
                        setPatient={()=>setPatient()}
                    />
                </Route>
                <Route path="/patient">
                    <Patient />
                </Route>
            </Switch>
        </Router>
    )
}

export default MyApp
