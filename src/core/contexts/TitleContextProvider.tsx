import React, { PropsWithChildren, useState } from 'react';

type TitleContextType = {
  defaultTitle: string;
  title: string;
  updateTitle: (value: string) => void;
};

const defaultTitle = 'COVID19 Stats';

const initial: TitleContextType = {
  defaultTitle,
  title: defaultTitle,
  updateTitle: () => {},
};

export const TitleContext = React.createContext(initial);

type Props = PropsWithChildren<{}>;

const TitleContextProvider = ({ children }: Props) => {
  const [title, setTitle] = useState(defaultTitle);

  const updateTitle = (value: string) => {
    setTitle(value);
  };

  const ctx = {
    defaultTitle,
    title,
    updateTitle,
  };

  return <TitleContext.Provider value={ctx}>{children}</TitleContext.Provider>;
};

export default TitleContextProvider;
