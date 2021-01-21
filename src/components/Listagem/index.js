import React, { useState, useEffect } from 'react';
import ListagemStyle from './styles';
import axios from 'axios';

const Listagem = () => {
    const [repository, setRepository] =  useState([]);
    useEffect(() => {
        loadPokemon();
    }, []);

    async function loadPokemon () {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0');
        const repositoryData = response.data.results;
        
        repositoryData.map(resposta => {
            const arrayResposta = resposta.url;
            
            async function newPokemon() {
                const novoaxios = await axios.get(arrayResposta)
                console.log(novoaxios.data);
            }

            newPokemon();
              
        });
        //setRepository();
    };

    return (
    <>
        <ListagemStyle><h1>Hello World</h1></ListagemStyle>
        {repository.map(pokemon => (
            <>
                <ul key={pokemon.name}>
                    <li>{pokemon.name}</li>
                    <li>{pokemon.url}</li>
                </ul>           
            </>    
        ))}
    </>
    )
};

export default Listagem;