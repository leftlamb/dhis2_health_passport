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

    useEffect(()=>{
        console.log(patient)
    }, [patient])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home 
                        patient={patient}
                        setPatient={(data)=>setPatient(data)}
                    />
                </Route>
                <Route path="/patient">
                    <Patient 
                        patient={patient}
                    />
                </Route>
            </Switch>
        </Router>
    )
}

export default MyApp
