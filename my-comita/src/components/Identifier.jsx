import React, { useState } from 'react';

import '../scss/variables.scss';
import '../scss/style.scss';

import identifiers from '../assets/identifier.json';

function Identifier({
  title,
  identeficator,
  inn,
  id,
  isChecked,
  onCheckboxChange
}) {
  return (
    <div>
      <div className="directions__item card" key={id}>
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={isChecked}
          onChange={() => onCheckboxChange(id)}
        />
        <label htmlFor={`checkbox-${id}`}></label>
        <div className="card__content">
          <div className="card__header">
            <span className="card__title">
              <span>{title}</span> {identeficator}
            </span>
          </div>
          <div className="card__details">
            <p>
              Код НО: <span>12424</span>
            </p>
            <p>
              ИНН: <span>{inn}</span>
            </p>
            <p>
              Действует: <span>12 июня 2023 – 12 июня 2024</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Identifier;
