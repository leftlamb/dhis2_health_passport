import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './search.css';


const styles = makeStyles({
    input: {
        color: '#bdbdbd',
        borderColor: '#bdbdbd',
        width: 210
    },
    button: {
        color: '#3f51b5',
        borderColor: '#3f51b5',
        marginTop: 4,
        height: 52,
        width: 50
    },
});


export const Search = () => {
    const classes = styles()

    return (
        <div className="search">
            <form>
                <TextField className={classes.input} id="outlined-basic" label="Search" variant="outlined" />
                <Button className={classes.button} variant="outlined" component="span">Search</Button>
            </form>
        </div>
    )}