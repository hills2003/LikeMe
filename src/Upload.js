import { Button, ButtonBase, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {useAuth} from "./Auth/AuthProvider";
import firebase from "./Auth/Firebase";

const useStyles=makeStyles((theme) =>({
    upload:{
        marginTop:theme.spacing(15),
        display:"flex",
        justifyContent:'center',
        flexDirection:"column",
        alignItems:'center'
    },
    none:{
        display:'none'
    }

  }))
    
function Upload(props) {
    const [content,setContent]=useState(false);
    const [img,setImg]=useState(null)
    const classes =useStyles();
    const [pix,setPix] =useState(null);
     const [visibility,setVisibility] =useState(false);
    const {activeUser } =useAuth();
     const saver =activeUser.displayName;
    
    const Update=(e) =>{
        if(e.target.files[0]){
            //setImg(e.target.files[0])

           const file = firebase.storage().ref(`${saver}`);
           const check =file.put(e.target.files[0]);
           check.on('state_changed',
           function snapshot(){

           },
           function error(){

           },
           function complete(){
             firebase.storage().ref(saver).getDownloadURL().then((url)=>{
                 setImg(url)
                 setContent(true);
             })
           })
        }
        
    }
    const name =activeUser.displayName;
    const photo =activeUser.photoURL;
    const putInDatabase=()=>{
        firebase.storage().ref(saver).getDownloadURL().then((imgs) => {
            firebase.database().ref('information').child(name).set({
                id:Math.round(Math.random() * 1000),
                title:name,
                subtitle:"posted on",
                avatar:photo,
                subheader:"posted on",
                img:imgs,
                numberOfLikes:0
            })
            setContent(false);
        });
    
    }
    // const firebaseUpload =(e)=>{

    // }
    return (
        <div className={classes.upload}>
            <input id="upload" onChange={Update} type="file" accept="*" className={classes.none}/>
            <label htmlFor="upload"><AddAPhotoIcon color="primary"/></label>

            { content ? <ButtonBase><img onClick={putInDatabase} width="250px" title="click to upload" height="200px" src={img} /> </ButtonBase> :""}
            { content ? <Button onClick={putInDatabase} variant="filled">Upload</Button> :""}
             
        </div>
    );
}

export default Upload;