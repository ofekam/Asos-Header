import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledHeader, Button } from '../shared';
import { useTranslation } from 'react-i18next';

const RowContainer = styled(StyledHeader)`
  height: 50px;
  background-color: #525050;
`;

const CategoriesButton = styled(Button)`
  color: #fff !important;
  height: 100%;
  font-weight: bold !important;
  white-space: nowrap;
  &:hover {
    background-color: #fff !important;
    color: #000 !important;
    transform: skew(0);
  }
  ${props =>
    props.selected &&
    `{
    background-color: #d01345 !important;
    border-bottom: none !important;
    transform: skew(-12deg);
    font-weight: 800;
  }`}
`;

const LINKS = [
  { title: 'newIn' },
  { title: 'clothing' },
  { title: 'shoes' },
  { title: 'accessories' },
  { title: 'activewear' },
  { title: 'faceBody' },
  { title: 'brands' },
  { title: 'outlet' },
  { title: 'marketPlace' },
  { title: 'inspiration' }
];

export default () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { t } = useTranslation();
  return (
    <RowContainer>
      {LINKS.map((item, index) => (
        <CategoriesButton
          selected={selectedTab === index}
          key={index}
          onClick={() => setSelectedTab(index)}
        >
          {t(item.title)}
        </CategoriesButton>
      ))}
    </RowContainer>
  );
};
