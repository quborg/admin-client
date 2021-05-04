const columns = (classes): any => [
  {
    name: '_id',
    label: 'ID',
    options: {
      display: 'excluded',
      filter: false,
      searchable: false,
    },
  },
  {
    name: '_englishName',
    label: 'English name',
    options: {
      filter: true,
      sort: true
    },
  },
  {
    name: '_dutchName',
    label: 'Dutch name',
    options: {
      filter: true,
      sort: true
    },
  },
];

export default columns;
