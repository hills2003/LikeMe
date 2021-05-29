import React, { useState } from 'react';
import {Route ,Redirect} from "react-router-dom";
import {useAuth} from "./Auth/AuthProvider";

function Private({component :Component , ...rest}) {
    const {activeUser} = useAuth();
    return (
        <Route
        {...rest}
        render={(props)=> activeUser ? <Component {...props} /> : <Redirect to="/" />}>
            
        </Route>
    );
}

export default Private;