import React from 'react';
import GeneralTable from 'app/components/GeneralTable';

function Repositories() {
  const headers = [
    {
      label: 'Lenguaje',
      accesor: 'language'
    },
    {
      label: 'Branch por defecto',
      accesor: 'default_branch'
    },
    {
      label: 'Url git',
      accesor: 'html_url'
    },
    {
      label: 'Nombre',
      accesor: 'name'
    },
    {
      label: 'Descripción',
      accesor: 'description'
    }
  ];

  const data = [
    {
      language: 'javascript',
      default_branch: 'master',
      html_url: 'https://some.com',
      name: 'El repo',
      description: 'La descripción'
    },
    {
      language: 'javascript',
      default_branch: 'master',
      html_url: 'https://some.com',
      name: 'El repo',
      description: 'La descripción'
    }
  ];
  return <GeneralTable headers={headers} data={data} />;
}

export default Repositories;
