import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import './activePatients.css'
import {Card, PersonButton} from '../'


const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
      // width: "80vw",
      display: 'flex',
      flexWrap: 'wrap',
      '@media (max-width: 800px)': {
          // display: 'block',
          // minHeight: '50vh',
      },
    },
  }))(MuiDialogContent);

export const ActivePatients = (props) => {
    let history = useHistory()

    const [open, setOpen] = useState(props.open);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
      // history.push('./') //TODO: handle cannot find patient scenario
      setOpen(false);
    };

    const patient2 = {
        name:"Lady John Traore II",
        pob:"Zomba",
        contactNumber:"99795712",
        sex: "Female",
        dob: "",
        village: "Zomba",
        religion: "Jedi",
        occupation: "",
        maritalStatus: "Married",
        useOfAlcohol: false,
        useOfTobacco: true,
        bloodGroup: "AB",
        allergies: [],
        id: "",
    }
    const patient4 = {
        name:"Hakuna",
        pob:"Lilongwe",
        contactNumber:"23561234",
        sex: "Male",
        dob: "25.12.1995",
        village: "Zigon",
        religion: "Pastafarian",
        occupation: "Priest",
        maritalStatus: "Single",
        useOfAlcohol: false,
        useOfTobacco: true,
        bloodGroup: "0",
        allergies: [],
        id: "",
    }
    
    return (
        <>
        <Card name="Active Patients" onClick={handleClickOpen}/>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Choose an active patient
            </DialogTitle>
            <DialogContent dividers>
                <PersonButton 
                    history={history} 
                    setPatient={(data)=>props.setPatient(data)}
                    patient={patient2}
                />
                <PersonButton 
                    history={history} 
                    setPatient={(data)=>props.setPatient(data)}
                    patient={patient4}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>handleClose()} color="primary">
              	Cannot find patient
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
}    

