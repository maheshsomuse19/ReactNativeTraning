import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers/index';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};
export default App;
