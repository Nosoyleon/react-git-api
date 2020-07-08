import Sorter from 'app/components/Sorter';

export const HEADERS = [
  {
    accesor: 'language',
    headerComponent: Sorter,
    headerProps: {
      label: 'Lenguaje',
      sortKey: 'language'
    }
  },
  {
    accesor: 'default_branch',
    headerComponent: Sorter,
    headerProps: {
      label: 'Branch por defecto',
      sortKey: 'default_branch'
    }
  },
  {
    accesor: 'html_url',
    headerComponent: Sorter,
    headerProps: {
      label: 'Url git',
      sortKey: 'html_url'
    }
  },
  {
    accesor: 'name',
    headerComponent: Sorter,
    headerProps: {
      label: 'Nombre',
      sortKey: 'name'
    }
  },
  {
    accesor: 'description',
    headerComponent: Sorter,
    headerProps: {
      label: 'Descripción',
      sortKey: 'description'
    }
  }
];

export const DEFAULT_RANGE = 5;
