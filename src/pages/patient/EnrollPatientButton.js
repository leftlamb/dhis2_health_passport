import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const EnrollPatientButton = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAction = (enroll) => {
    enroll && props.setEnrolled(true)
    setOpen(false);
  };

  return (
    <div>
        <Button variant="outlined" color={props.isEnrolled?'secondary':'primary'} onClick={handleClickOpen}>
            {props.isEnrolled?'End Visit':'Start Visit'}
        </Button>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Enroll patient"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to enroll this patient? The patient will then be visible in the clinics active list.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleAction(false)} color="primary">
            No
          </Button>
          <Button onClick={()=>handleAction(true)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
