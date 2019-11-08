import React from 'react';
import Reactstrap from "reactstrap";
import Card from "./Characters";


// const Card = `CharacterCards`{
//     width: 35%;
//     margin: 0 auto;
//     }

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