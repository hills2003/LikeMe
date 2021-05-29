import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {makeStyles ,Button} from "@material-ui/core";
import {useHistory } from "react-router-dom"
import {useAuth } from "./Auth/AuthProvider";
const useStyles =makeStyles((theme)=>({
    like:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        position:"relative",
        top:theme.spacing(30),
        
    }
}))
function Welcome(props) {
    const classes =useStyles();
   const history =useHistory();
   const {Signin} =useAuth();


    const Sign= async()=>{
        try{
           await Signin()
           history.push("/like")
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div className={classes.like}>
            <FavoriteIcon size="large" color="secondary" />
            <Button onClick={Sign} variant="outlined" color="secondary">Sign In</Button>
        </div>
    );
}

export default Welcome;