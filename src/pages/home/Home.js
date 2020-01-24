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

    return (
        <div className="container">
            <div className="searchContainer">
                <div className="searchBarContainer">
                    <Search/>
                </div>
                <div className="resultContainer">
                    <PersonButton name="John Traore" pob="Zomba" contactNumber="90199476" history={history} setPatient={(data)=>props.setPatient(data)}/>
                    <PersonButton name="Yoshi Bring Hah!" pob="Lilongwe" contactNumber="23458342" history={history} setPatient={(data)=>props.setPatient(data)}/>
                    <PersonButton name="John Traore II" pob="Zomba" contactNumber="99795712" history={history} setPatient={(data)=>props.setPatient(data)}/>
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

