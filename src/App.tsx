import React, { useContext, useEffect } from 'react';

import { routes } from './core/routes/routes';

import { Container } from 'react-bootstrap';

import NavBar from './core/shared/NavBar';
import Footer from './core/shared/Footer';

import { TitleContext } from './core/contexts/TitleContextProvider';

type Props = {};

const App = (props: Props) => {
  const { title } = useContext(TitleContext);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <NavBar />
      <Container className="my-5">{routes}</Container>
      <Footer />
    </>
  );
};

export default App;
