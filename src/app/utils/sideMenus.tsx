export const sideMenus = [
  { title: 'Resumo', src: 'resumo' },
  { title: 'Perfil', src: 'perfil/1' },

  {
    title: 'Explorar',
    src: 'explorar',
    subMenus: [
      {
        title: 'Alimentação',
        src: 'alimentacao',
        icon: 'apple'
      },
      {
        title: 'Exames e Consultas',
        src: 'exames',
        icon: 'medical'
      },
      {
        title: 'Sono',
        src: 'sono',
        icon: 'bed'
      },

      {
        title: 'Atividade',
        src: 'atividade',
        icon: 'flame'
      },
    ],
  }

];