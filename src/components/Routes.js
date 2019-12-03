import React from 'react';
import PropTypes from 'prop-types'
import { Route , Redirect} from 'react-router-dom';

export default function RouterWrapper({
    component: Component,
    isPrivate ,
    ...rest
}) {
    const signed = localStorage.getItem('auth-token') ;
    

    if(!signed && isPrivate){
        return <Redirect to="/login" />;
    }
    if(signed && !isPrivate) {
        return <Redirect to = "/cadastro"/>
    }
  
      return  <Route {...rest} component = {Component}/>;
 
}
RouterWrapper.prototype = {
    isPrivate : PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element ,PropTypes.func])
    .isRequired ,
};

RouterWrapper.defaultProps = {
  isPrivate: false ,
}