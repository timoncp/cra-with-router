import React from 'react';
import { Route } from 'react-router-dom';

import Modules from '../Modules';

import './Content.css';

const Content = () => (
  <div className='Content'>
    { Modules.map(mod => <Route { ...mod } />) }
  </div>
);

export default Content;

