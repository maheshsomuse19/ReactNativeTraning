import React from 'react';
import {useState} from 'react';
import ContextData from './ContextData';
const ContextState = props => {
  const state = {
    firstname: 'Mahesh',
    lastname: 'Somuse',
  };

  return (
    <ContextData.Provider value={state}>{props.children}</ContextData.Provider>
  );
};

export default ContextState;

// const styles = StyleSheet.create({});
