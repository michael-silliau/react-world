import React from "react";

const Card = ({ country }) => {
  const name = country.translations.fra.common;
  return (
    <li className="card">
      <img src={country.flags.svg} alt={"drapeau" + name} />
      <div className="infos">
        <h2>{name}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
