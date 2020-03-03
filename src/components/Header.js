import React from 'react';
import { Flex } from '../shared';
import Navbar from './Navbar';
import ActionsHeader from './ActionsHeader';
import Categories from './Categories';

export default props => {
  return (
    <Flex.FlexColumn>
      <Navbar />
      <ActionsHeader />
      <Categories />
    </Flex.FlexColumn>
  );
};
