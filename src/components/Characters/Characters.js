import React from 'react';
import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            id:260,
            name: "Phillip Jacobs",
                status:"Alive",
            image:"https://rickandmortyapi.com/api/character/avatar/260.jpeg"
        },
        {
            id:458,
            name:"Tax Attorney",
            status:"unknown",
            image:"https://rickandmortyapi.com/api/character/avatar/458.jpeg"
        }
    ]
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};