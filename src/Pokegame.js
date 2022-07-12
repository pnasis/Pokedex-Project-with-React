import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render() {
        let player1 = [];
        let player2 = [ ...this.props.pokemon];
        while(player1.length < player2.length) {
            let randIdx = Math.floor(Math.random() * player2.length);
            let randPokemon = player2.splice(randIdx, 1)[0];
            player1.push(randPokemon);
        }
        
        let total1 = player1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0); //calculating the total experience of player1.
        let total2 = player2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0); //calculating the total experience of player2.
        return (
            <div>
                <Pokedex pokemon={player1} exp={total1} isWinner={total1 > total2}/>
                <Pokedex pokemon={player2} exp={total2} isWinner={total2 > total1}/>
            </div>
        )
    }
}

export default Pokegame;