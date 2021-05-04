import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import CONST from 'src/defs/const';
import { Queries } from 'src/graphql';

const Sections: React.FC<TYPES.SelectSections> = ({ defaultName, disabled, onChange }) => {
  const [value, setValue] = useState<SCHEMA.Section>({ _id: '', name: defaultName });
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<SCHEMA.Section[]>([]);
  const { loading, error, data = { getSections: [] } } = useQuery(Queries.SECTIONS, {
    variables: { args: { start: 0, limit: CONST.Gql.LIMIT, filter: { isActive: true } } },
  });

  useEffect(() => {
    if (options.length !== data.getSections.length) setOptions(data.getSections);
  }, [data, options, setOptions]);

  return (
    <FormControl error={Boolean(error)} fullWidth>
      <Autocomplete
        disabled={disabled}
        fullWidth
        getOptionLabel={(option) => option.name || ''}
        inputValue={inputValue}
        loading={loading}
        onChange={(e, val) => val && setValue(val)}
        onInputChange={(e, val) => {
          setInputValue(val);
          onChange(val);
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label="Section" variant="outlined" />}
        value={value}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

Sections.defaultProps = {
  disabled: false,
};

export default Sections;
