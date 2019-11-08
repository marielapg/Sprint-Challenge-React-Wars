import React, {useEffect, useState} from 'react';
import Characters from "./Characters"
import axios from "axios";




function CharactersData(){
    const [WarsPeople, SetWarsPeople ] = useState([])
    useEffect(() => {
        axios
            .get("https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/")
            .then(response => {
                SetWarsPeople(response.data.results)
                console.log(response.data.results)
            })
    },[])

    return (
        <div className = "container">
            
            {WarsPeople.map(item =>{
                return (
                    
                    <Characters
                    key ={item.id}
                   name = {item.name}
                    height = {item.height}
                   mass = {item.mass}
                    />

                )
            })}
        
             
        </div>

    )
}



export default CharactersData;