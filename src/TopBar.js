import React, { useState } from 'react';
import {AppBar ,Avatar,Tab,Tabs,Toolbar } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import Cards from "./Cards";
import Upload from "./Upload";

const useStyles=makeStyles((theme) =>({
  like:{
      flexGrow:1
  },
  tabs:{
      flexGrow:1
  },
  purples:{
      backgroundColor:purple[700]
  }
}))
function TopBar(props) {

    const classes =useStyles();
    const [value,setValue]=useState(0);

    const handleChange =(event,newValue)=>{
        setValue(!value)
    }
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h3 className={classes.like}>LikeMe</h3>
                <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Home" />
                    <Tab label="Upload" />
                   
                </Tabs>
                     <Avatar className={classes.purples}>H</Avatar>
                </Toolbar>
            </AppBar>
            {value == 0 && <Cards />}
            {value == 1 && <Upload />}
        </div>
    );
}

export default TopBar;