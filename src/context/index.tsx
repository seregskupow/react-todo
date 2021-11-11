import { rootStore } from '../store/index';
import React, { createContext } from 'react';

export const StoresContext = React.createContext(rootStore);

export const StoresContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <StoresContext.Provider value={rootStore}>{children}</StoresContext.Provider>
);
