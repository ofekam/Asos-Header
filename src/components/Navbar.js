import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button, StyledHeader } from '../shared';
import { useTranslation } from 'react-i18next';
import { Icon } from '@material-ui/core';

const FlexEndContainer = styled(StyledHeader)`
  justify-content: flex-end;
  height: 30px;  
`;

export default () => {
  const { t } = useTranslation();
  return (
    <FlexEndContainer>
      <ButtonGroup
        variant="text"        
        aria-label="text primary button group"
        size="small"
      >
        <Button>{t('marketPlace')}</Button>
        <Button>{t('help')}</Button>
        <Button>
          <Icon>flag</Icon>
        </Button>
      </ButtonGroup>
    </FlexEndContainer>
  );
};
