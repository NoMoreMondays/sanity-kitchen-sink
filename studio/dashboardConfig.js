export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7af1fe3d4ad79f9c837696',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6farckiw',
                  apiId: '41dc01e4-b7bb-43d7-ada3-d94ee73126e7'
                },
                {
                  buildHookId: '5f7af1fed8955c9d16bc7f06',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-i8swedvg',
                  apiId: 'ac91479e-5457-4937-b4a3-0bfd530058ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NoMoreMondays/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-i8swedvg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
