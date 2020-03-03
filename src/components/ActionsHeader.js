import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button, Flex, Autocomplete, StyledHeader } from '../shared';
import { useTranslation } from 'react-i18next';
import { Icon } from '@material-ui/core';

// styling
const RowContainer = styled(StyledHeader)`
  height: 60px;
  background-color: #2d2d2d;
`;
const HeaderButton = styled(Button)`
  font-weight: bold !important;
  width: 115px;
  ${props =>
    props.selected &&
    `{
    background-color: #525050 !important;
    border-bottom: none !important;
  }`}
`;

const ColoredAutocomplete = styled(Autocomplete)`
  background-color: #fff !important;
  color: #000 !important;
`;

const AutocompleteContainer = styled.div`
  max-height: 100%;
  padding: 30px;
  flex-grow: 1;
`;

// consts
const Tabs = {
  Men: 0,
  Women: 1
};

const Options = [
  { title: 'wow' },
  { title: 'nice' },
  { title: 'cool' },
  { title: 'ready' },
  { title: 'set' },
  { title: 'go' }
];

export default () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(Tabs.Men);
  return (
    <RowContainer>
      <ButtonGroup
        variant="text"
        aria-label="text primary button group"
        size="medium"
        color="inherit"
        style={{ height: '100%' }}
      >
        <HeaderButton size="large">{t('asos')}</HeaderButton>
        <HeaderButton
          selected={selectedTab === Tabs.Women}
          onClick={() => setSelectedTab(Tabs.Women)}
        >
          {t('women')}
        </HeaderButton>
        <HeaderButton
          selected={selectedTab === Tabs.Men}
          onClick={() => setSelectedTab(Tabs.Men)}
        >
          {t('men')}
        </HeaderButton>
      </ButtonGroup>
      <AutocompleteContainer>
        <ColoredAutocomplete
          label={t('searchForItems')}
          options={Options}
          getOptionLabel={option => option.title}
        />
      </AutocompleteContainer>
      <Flex.FlexRow>
        <Button color="inherit" aria-label="delete">
          <Icon>account_circle</Icon>
        </Button>
        <Button color="inherit" aria-label="delete">
          <Icon>favorite</Icon>
        </Button>
        <Button color="inherit" aria-label="delete">
          <Icon>work</Icon>
        </Button>
      </Flex.FlexRow>
    </RowContainer>
  );
};
