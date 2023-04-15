import React from 'react';

import logo from '../../assets/icons/logo.svg';

import { Container } from 'react-bootstrap';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <span className="text-muted">
          <p>
            <img alt="" src={logo} width="20" height="20" className="me-1" />©{' '}
            {new Date().getFullYear()} <b>COVID19 Stats</b>
          </p>

          <p>
            <b>by</b>{' '}
            <small>
              <a
                href="https://github.com/KamilSt18"
                className="text-decoration-none text-success"
                target="_blank"
                rel="noreferrer"
              >
                Kamil Stępkowski
              </a>{' '}
              <b>&</b>{' '}
              <a
                href="https://covid19api.com"
                className="text-decoration-none text-primary"
                target="_blank"
                rel="noreferrer"
              >
                covid19api.com
              </a>
            </small>
          </p>
        </span>
      </footer>
    </Container>
  );
};

export default Footer;
