import React from 'react';
import { Link } from 'react-router-dom';
import { LAB_APPS } from './lab/Lab';

const Map = () => {
  return (
    <div>
      <h1>Available Apps:</h1>
      <ul>
        {Object.entries(LAB_APPS).map(([key, app]) => (
          <li key={key}>
            <Link reloadDocument to={app.path}>{app.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;