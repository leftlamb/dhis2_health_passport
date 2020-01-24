import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import {useHistory} from 'react-router-dom'

import i18n from '@dhis2/d2-i18n'
import './home.css'
import {Card, PersonButton} from '../../components'

import journal_icon from '../../img/journal_icon.png'

const query = {
    me: {
        resource: 'me',
    },
}

export const Home = (props) => {
    let history = useHistory()

    const test = (what)=>{
        console.log(what)
    }
    return (
        <div className="container">
            <div className="searchContainer">
                <div className="input">
                    <input className=""></input>
                    <button className="searchButton">Search</button>
                </div>
                <div className="resultContainer">
                    <PersonButton name="John Traore" pob="Zomba" contactNumber="90199476" history={history}/>
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

