import React, { useState, useEffect } from "react";
import ListagemStyle from "./styles";
import axios from "axios";

const Listagem = () => {
  const [repository, setRepository] = useState([]);
  useEffect(() => {
    async function loadPokemons() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=5&"
      );

      const repositoryData = response.data.results;

      const arrayOfPromises = repositoryData.map((eachResult) => {
        return axios.get(eachResult.url);
      });

      //   Aqui tem um array de resultados do fetch do axios. Precisa iterar sobre eles e pegar o .data
      // Pq é dentro do .data que tão os pokemons
      const arrayOfAxiosResults = await Promise.all(arrayOfPromises);

      console.log(arrayOfAxiosResults);

      const pokemonsData = arrayOfAxiosResults.map((response) => response.data);

      setRepository(pokemonsData);
    }

    loadPokemons();
  }, []);

  return (
    <>
      <ListagemStyle>
        <h1>Hello World</h1>
      </ListagemStyle>
      {repository.map((pokemon) => (
        <>
          <ul key={pokemon.name}>
            <li>{pokemon.name}</li>
            <li>{pokemon.url}</li>
          </ul>
        </>
      ))}
    </>
  );
};

export default Listagem;
