import React from 'react';
import {Button, Heading, HStack, Switch, useColorMode} from 'native-base';
import {styles} from './styles';

export const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const toggleSwitch = () => {
    toggleColorMode();
  };
  return (
    <HStack style={styles.headerContainer}>
      <Heading style={{color: 'white'}}>My List</Heading>
      {/* <Button
        defaultIsChecked={isDarkMode}
        offTrackColor="black.800"
        onTrackColor="primary.200"
        onThumbColor="black.800"
        offThumbColor="primary.200"
        value={isDarkMode}
        onValueChange={toggleSwitch}
      /> */}
    </HStack>
  );
};
