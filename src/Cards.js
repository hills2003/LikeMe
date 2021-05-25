
import React,{useState} from 'react';
import CardItem from "./CardItem";
import profile from "./assets/profile.png";
import {makeStyles} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';

const useStyles=makeStyles((theme) =>({
  div:{
    marginTop:theme.spacing(12),
  },
  
}))

function Cards(props) {
  const classes =useStyles();
    
    const [info,setInfo] =useState([
        {id:1,title:'new post',text:" i love candy i love candy i love candy i love candy i love candy ",subheader:'posted on',avatar:'H',img:profile},
        {id:2,title:'new post',text:" i love candy i love candy i love candy i love candy i love candy ",subheader:'posted on',avatar:'H',img:profile},
        {id:3,title:'new post',subheader:'posted on',avatar:'H',img:profile,text:" i love candy i love candy i love candy i love candy i love candy "},
        {id:4,title:'new post',subheader:'posted on',avatar:'H',img:profile,text:" i love candy i love candy i love candy i love candy i love candy "}
    ])
    return (
        <div >
            <div className={classes.div}></div>
            {info.map(piece => ( <CardItem key={piece.id} piece={piece} />))}
        </div>
    );
}

export default Cards;