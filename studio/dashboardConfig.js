export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d023b59ff007214199f3f08',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-test-studio-47zfhejm',
                  apiId: '7870fa49-c18e-462d-a5a5-c126ac560706'
                },
                {
                  buildHookId: '5d023b59e561e9ec572549ef',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-test-web',
                  apiId: 'bbd25a9c-51a0-4168-9c9f-c0811ede9c0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/finiteattention/sanity-sapper-blog-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-test-web.netlify.com', category: 'apps'}
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
