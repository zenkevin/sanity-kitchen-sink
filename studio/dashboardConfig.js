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
                  buildHookId: '6352874f0f26923c65828f64',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wnw9qa9y',
                  apiId: '6401e0ac-42a8-4dbc-a530-ef3cc0a49832'
                },
                {
                  buildHookId: '6352874f6eb17e3e74235b1a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bq5wjm3p',
                  apiId: 'c0806a11-276b-4031-b051-5ec2a4bd2a3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zenkevin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bq5wjm3p.netlify.app', category: 'apps'}
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
