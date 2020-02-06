import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {Home, Patient, Register} from './pages'
import { ARTForm, OPRForm } from './pages/programs';

const MyApp = () => {
    const [patient, setPatient] = useState({
        name: "",
        sex: {
            name: "",
        },
        dob: "",
        contactNumber: "",
        placeob: "",
        village: "",
        religion: "",
        occupation: "",
        maritalStatus: "",
        useOfAlcohol: "",
        useOfTobacco: "",
        bloodGroup: "",
        allergies: [],
        id: "",
        familyHistory: {
            allergies: "",
            mentalDiseases: "",
            neoplasms: "",
            asthma: "",
            diabetes: "",
            cardiovascularDiseases: "",
            endocrineDiseases: "",
            hypertension: "",
            rheumatism: "",
            sickleCellDiseases: "",
            otherDiseases: "",
        },
        pastMedicalSurgicalHistory: {
            
        },
        familyPlanning: {
            
        },
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
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/programs/ART">
                    <ARTForm
                        setPatient={(data)=>setPatient(data)}
                        patient={patient}
                    />
                </Route>
                <Route path="/programs/OPR">
                    <OPRForm
                        setPatient={(data)=>setPatient(data)}
                        patient={patient}
                    />
                </Route>
            </Switch>
        </Router>
    )
}

export default MyApp
