import React, { useState } from 'react'
import "./Characters.css"
import { useEffect } from 'react'
import axios from 'axios'
import Card1 from './card'


const Characters = () => {

    
    const [characters, setCharacters] = useState([])


    useEffect(()=>{
             

        axios.get("https://rickandmortyapi.com/api/character")
            .then (res => setCharacters(res.data.results))


    }, [])
 

    console.log(characters)


return (
<div key={characters.id} className="card1">
<h1>characters</h1>


{characters.map( (character)=> {

    
    return(
<Card1 character={character} key={character.id} />
    )})}
</div>
 )}

export default Characters