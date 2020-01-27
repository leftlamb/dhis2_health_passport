import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import {useHistory} from 'react-router-dom'

import i18n from '@dhis2/d2-i18n'
import './home.css'
import {Card, PersonButton, Search} from '../../components'

import journal_icon from '../../img/journal_icon.png'

const query = {
    me: {
        resource: 'me',
    },
}

export const Home = (props) => {
    let history = useHistory()
    const patient1 = {
        name:"John Traore",
        pob:"Zomba",
        contactNumber:"90199476",
        sex: "M",
        dob: "25.12.1995",
        village: "",
        religion: "",
        occupation: "",
        maritalStatus: "",
        useOfAlcohol: true,
        useOfTobacco: true,
        bloodGroup: "0",
        allergies: ['Fish', 'Nuts', 'Poisenes snakes'],
        id: "",
    }
    const patient2 = {
        name:"John Traore II",
        pob:"Zomba",
        contactNumber:"99795712",
        sex: "F",
        dob: "",
        village: "Zomba",
        religion: "Jedi",
        occupation: "",
        maritalStatus: "",
        useOfAlcohol: false,
        useOfTobacco: true,
        bloodGroup: "AB",
        allergies: [],
        id: "",
    }
    const patient3 = {
        name:"Yoshi Bring Hah!",
        pob:"Lilongwe",
        contactNumber:"23458342",
        sex: "M",
        dob: "25.12.1995",
        village: "",
        religion: "",
        occupation: "",
        maritalStatus: "",
        useOfAlcohol: false,
        useOfTobacco: true,
        bloodGroup: "0",
        allergies: [],
        id: "",
    }
    
    return (
        <div className="container">
            <div className="searchContainer">
                <div className="searchBarContainer">
                    <Search/>
                </div>
                <div className="resultContainer">
                    <PersonButton 
                        history={history} 
                        setPatient={(data)=>props.setPatient(data)}
                        patient={patient1}
                    />
                    <PersonButton 
                        history={history} 
                        setPatient={(data)=>props.setPatient(data)}
                        patient={patient2}
                    />
                    <PersonButton 
                        history={history} 
                        setPatient={(data)=>props.setPatient(data)}
                        patient={patient3}
                    />
                </div>
            </div>
            <div className="cardContainer">
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
                <Card name="test" img={journal_icon}/>
            </div>
        </div>
    )
}    

