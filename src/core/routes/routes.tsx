import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomeView from '../../home/containers/HomeView';
import CountryView from '../../country/containers/CountryView';

import { InfoMessage } from '../shared/InfoMessage';

export const routes = (
  <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="/country/:code" element={<CountryView />} />

    <Route
      path="*"
      element={
        <InfoMessage messageType='danger'>
          Not Found (404) - the requested webpage was not found.
        </InfoMessage>
      }
    />
  </Routes>
);
