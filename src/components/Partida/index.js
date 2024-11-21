import axios from 'axios';
import './Partida.css';
import { useEffect, useState } from 'react';

function Partida() {
    const [playerPokemon, setPlayerPokemon] = useState(null);
    const [npcPokemon, setNpcPokemon] = useState(null);

    function pokeRandom() {
        return Math.floor(Math.random() * 1025) + 1;
    }

    function gerarPokemon() {
        let playerRandomNumber
        let npcRandomNumber
        do{
             playerRandomNumber = pokeRandom();
             npcRandomNumber = pokeRandom();
        }while (playerRandomNumber === npcRandomNumber)

        axios
            .all([
                axios.get(`https://pokeapi.co/api/v2/pokemon/${playerRandomNumber}`),
                axios.get(`https://pokeapi.co/api/v2/pokemon/${npcRandomNumber}`),
            ])
            .then(
                axios.spread((playerResponse, npcResponse) => {
                    setPlayerPokemon(playerResponse.data);
                    setNpcPokemon(npcResponse.data);
                })
            )
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        gerarPokemon();
    }, []);

    const getSprite = (pokemon) => 
        pokemon?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default ||
        pokemon?.sprites?.front_default; 

    const playerSprite = getSprite(playerPokemon);
    const npcSprite = getSprite(npcPokemon);

    return (
        <section className="partida-content">
            <div className="pokePlayer">
                {playerSprite ? (
                    <img src={playerSprite} alt={`Sprite animado de ${playerPokemon.name}`} />
                ) : (
                    <p>Imagem não encontrada</p>
                )}
            </div>
            <div className="pokeNpc">
                {npcSprite ? (
                    <img src={npcSprite} alt={`Sprite animado de ${npcPokemon.name}`} />
                ) : (
                    <p>Imagem não encontrada</p>
                )}
            </div>
            <div className="actions">
                <button onClick={gerarPokemon}>
                    Gerar Novos Pokémon
                </button>
            </div>
        </section>
    );
}

export default Partida;
