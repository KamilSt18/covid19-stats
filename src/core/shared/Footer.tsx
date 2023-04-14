import React from 'react';

import logo from '../../assets/icons/logo.svg';

import { Container } from 'react-bootstrap';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-5 d-flex align-items-center">
          <img alt="" src={logo} width="20" height="20" className="me-1" />
          <span className="mb-3 mb-md-0 text-muted">
            © {new Date().getFullYear()} <b>COVID19 Stats</b> by{' '}
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
          </span>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
