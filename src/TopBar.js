import React, { useState } from 'react';
import {AppBar ,Avatar,Tab,Tabs,Toolbar } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import Cards from "./Cards";
import Upload from "./Upload";
import {useAuth} from "./Auth/AuthProvider";
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
    const {activeUser} =useAuth();
    const classes =useStyles();
    const [value,setValue]=useState(0);

    const handleChange =(event,newValue)=>{
        setValue(newValue)
    }
    
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h3 className={classes.like}>LikeMe</h3>
                <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab icon={<HomeIcon />} />
                    <Tab icon={<AddCircleIcon />} />
                   
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