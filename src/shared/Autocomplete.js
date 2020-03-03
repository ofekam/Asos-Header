import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const BorderedAutocomplete = styled(Autocomplete)`
  border-radius: 19px/50%;
`;

export default ({ label, ...props }) => {
  return (
    <BorderedAutocomplete
      {...props}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="filled"
        />
      )}
    />
  );
};
