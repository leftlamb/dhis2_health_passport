import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {Home, Patient, Register} from './pages'

const MyApp = () => {
    const dataElement = {
        name: "",
        description: "", //use as helper text
        valueType: "",
        
    }
    const [patient, setPatient] = useState({
        name: "",
        sex: {
            value: "",
            type: "",
            optionSetDataValues: "",
        },
        dob: "",
        contactNumber: "",
        placeob: "",
        village: {
            value: "",
            type: "text",

        },
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
            </Switch>
        </Router>
    )
}

export default MyApp
