import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import './app.css'
import {Card} from './components'

import journal_icon from './img/journal_icon.png'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <div className="container">
        <div className="searchContainer">
            <div className="input">
                <input className=""></input>
                <button className="searchButton">Search</button>
            </div>
            <div className="resultContainer">
                
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

        {/* <style jsx>{`
            .container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
            }
        }`}</style> */}
        {/* <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                        <h1>
                            {i18n.t('Hello {{name}}', { name: data.me.name })}
                        </h1>
                        <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                    </>
                )
            }}
        </DataQuery> */}
    </div>
)

export default MyApp
