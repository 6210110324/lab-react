import React, { useState } from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';
import { setState } from 'expect';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
        }
       
}

export default function WordCard(props){

    cont [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 
    }
    
    return (
        <div>
            { Array.from(props.value).map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler}/>) }
        </div>
 )
}
