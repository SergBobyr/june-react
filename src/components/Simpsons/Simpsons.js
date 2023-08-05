import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM7tv2tM7pFCMhcDMiGMkRSFRvidb_BJnm94iHxYb&s'

        },
        {
            id:2,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://citaty.info/files/characters/760.png'

        },
        {
            id:3,
            name: 'Liza',
            surname: 'Simpson',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQU8-f9ATzZ2qmsx1-vRN0GBqlDtvuTEM75m3BTP3&s'

        }
    ]

    return (
        <div>
            {simpsons.map(simpson=><Simpson key={simpson.key} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};