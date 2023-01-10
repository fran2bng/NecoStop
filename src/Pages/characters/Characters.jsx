import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card1 from "./card1";
import Typography from "@mui/material/Typography";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  console.log(characters);

  return (
    <>
      <Typography
        backgroundColor="black"
        color={"white"}
        variant="h4"
        style={{
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        Characters
      </Typography>

      <div
        style={{
          margin: "auto",
          border: "2px solid black",
          backgroundColor: "grey",
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {characters.map((character) => {
          return <Card1 character={character}></Card1>;
        })}
      </div>
    </>
  );
};

export default Characters;
