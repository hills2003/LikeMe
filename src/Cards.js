
import React,{useEffect, useState} from 'react';
import CardItem from "./CardItem";
import profile from "./assets/profile.png";
import {makeStyles} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import {useAuth} from "./Auth/AuthProvider";
import firebase from "./Auth/Firebase";

const useStyles=makeStyles((theme) =>({
  div:{
    marginTop:theme.spacing(12),
  },
  
}))

function Cards(props) {
  const {activeUser} =useAuth();
  const classes =useStyles();
    const name  = activeUser.displayName;
    const photo =activeUser.photoURL;
    const [info,setInfo] =useState([
         
    ])
    useEffect(()=>{
      firebase.database().ref("information").on('value',(snapshot)=>{
        const arrs = [];
        snapshot.forEach(snap => {
          arrs.push(snap.val());
          setInfo(arrs)
        })
      })
    },[])
    

    return (
        <div >
            <div className={classes.div}></div>
            {info.length > 0 ? info.map(piece => ( <CardItem key={piece.id} piece={piece} />)) : ""}
        </div>
    );
}

export default Cards;