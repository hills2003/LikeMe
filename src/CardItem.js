import { Avatar, CardHeader ,Card, CardMedia, IconButton, CardContent, makeStyles, CardActions, FormControlLabel, Checkbox } from '@material-ui/core';
import React,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {format} from "date-fns";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    const classes =useStyles();
    return (
        <div className={classes.centered}>
            <Card className={classes.spacedcards}>
                <CardHeader title={piece.title} subheader={`${piece.subheader} ${format(new Date(),"do MMMM y")}`} avatar={<Avatar src={piece.img} />} action={<IconButton><MenuIcon /></IconButton>}/>
                 <CardMedia title="users image" className={classes.img} image={piece.img} />
                 <CardContent>
                     {piece.text}
                 </CardContent>
                 <CardActions>
                     <FormControlLabel control={<Checkbox icon={<FavoriteBorderIcon/>} checkedIcon={<FavoriteIcon color="primary" />}/>}/>
                 </CardActions>
            </Card>
        </div>
    );
}

export default CardItem;