import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <li key={p} className="list-group-item">
          {p}
        </li>
      ))}
    </div>
  );
}
