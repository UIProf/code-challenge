import React from 'react';
import { formatName } from './helpers';

export const Card = ({ name, image }) => (
  <div className="card">
    <div className="card-image">
        <img src={`/images/${image}`} alt={name} />
    </div>
    <div className="card-name">{formatName(name)}</div>
  </div>
);
