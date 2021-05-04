import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { FormControl, FormHelperText, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Queries } from 'src/graphql';

const Categories: React.FC<TYPES.SelectCategories> = ({ defaultName, disabled, onChange }) => {
  const [value, setValue] = useState<SCHEMA.CategoryInputs>({ _englishName: defaultName });
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<SCHEMA.CategoryInputs[]>([]);
  const { loading, error, data = { getCategories: [] } } = useQuery(Queries.CATEGORIES);

  useEffect(() => {
    if (options.length !== data.getCategories.length)
      setOptions(data.getCategories.map(({_id, ...rest}) => rest));
  }, [data, options, setOptions]);

  return (
    <FormControl error={Boolean(error)} fullWidth>
      <Autocomplete
        disabled={disabled}
        fullWidth
        getOptionLabel={(option) => option._englishName || ''}
        inputValue={inputValue}
        loading={loading}
        onChange={(e, val) => {
          if (val) {
            setValue(val);
            onChange(val);
          }
        }}
        onInputChange={(e, val) => setInputValue(val)}
        options={options}
        renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
        value={value}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

Categories.defaultProps = {
  disabled: false,
};

export default Categories;
