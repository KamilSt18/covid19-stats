import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import { TotalByCountryResponse } from '../../core/models/TotalByCountryResponse';

type Props = { summaryByCountry: TotalByCountryResponse; code: string };

const SummaryCountry = ({ summaryByCountry, code }: Props) => {
  return (
    <>
      <h1>
        <img
          src={`https://flagsapi.com/${code}/shiny/64.png`}
          alt="Country flag"
        />{' '}
        {summaryByCountry.Country} ({code})
      </h1>

      <Card>
        <Card.Header>
          <strong>Summary of all cases for the country</strong>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Confirmed:</strong>{' '}
            {summaryByCountry.Confirmed.toLocaleString('en-US')}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Active:</strong>{' '}
            {summaryByCountry.Active.toLocaleString('en-US')}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Recovered:</strong>{' '}
            {summaryByCountry.Recovered.toLocaleString('en-US')}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Deaths:</strong>{' '}
            {summaryByCountry.Deaths.toLocaleString('en-US')}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <p>
        Last updated: {new Date(summaryByCountry.Date).toLocaleString('en-US')}
      </p>
    </>
  );
};

export default SummaryCountry;
