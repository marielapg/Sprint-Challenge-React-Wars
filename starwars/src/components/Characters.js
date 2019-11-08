import React from 'react';
import {Card } from "reactstrap";



    const Characters = props => {
        return(


            <Card>
            <h2>{props.name}</h2>
            <p>Height = {props.height}</p>
            <p>Mass = {props.mass}</p>
            </Card>
        
        )
    };


export default Characters;