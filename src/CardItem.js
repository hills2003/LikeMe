import { Avatar, CardHeader ,Card, CardMedia, IconButton, CardContent, makeStyles, CardActions, FormControlLabel, Checkbox, Badge } from '@material-ui/core';
import React,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {format} from "date-fns";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useAuth} from "./Auth/AuthProvider";
import firebase from "./Auth/Firebase";

const useStyles =makeStyles((theme) =>({
    img:{
        height:200,
    },
    spacedcards:{
        marginBottom:theme.spacing(5)
    },
    centered:{
        display:"flex",
        flexDirection:'columm',
        justifyContent:'center'
    }
}))

function CardItem({piece}) {

    const {activeUser} =useAuth();
    const name = activeUser.displayName;
    const [state,setState] =useState(true);
    const updateLikes =() =>{
        setState(!state);

        if(state){
            firebase.database().ref('information').child(name).child('numberOfLikes').transaction(current => current + 1)
        }
        else{
            firebase.database().ref('information').child(name).child('numberOfLikes').transaction(current => current - 1)
        }
        
    }

    const Logout =()=>{
        return firebase.auth().signOut();
    }
    const classes =useStyles();
    return (
        <div className={classes.centered}>
            <Card className={classes.spacedcards}>
                <CardHeader title={piece.title} subheader={`${piece.subheader} ${format(new Date(),"do MMMM y")}`} avatar={<Avatar  src={piece.avatar} />} action={<IconButton><MenuIcon /></IconButton>}/>
                 <CardMedia onClick={Logout} title="users image" className={classes.img} image={piece.img} />
        
                 <CardActions>
                     <FormControlLabel control={<Badge color="primary" onClick={updateLikes} badgeContent={piece.numberOfLikes}><Checkbox icon={<FavoriteBorderIcon/>} checkedIcon={<FavoriteIcon color="primary" />}/></Badge>}/>
                 </CardActions>
            </Card>
        </div>
    );
}

export default CardItem;