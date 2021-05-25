import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles=makeStyles((theme) =>({
    upload:{
        marginTop:theme.spacing(15)
    }
  }))
    
function Upload(props) {

    const classes =useStyles();
    return (
        <div className={classes.upload}>
            <p>Upload</p>
        </div>
    );
}

export default Upload;