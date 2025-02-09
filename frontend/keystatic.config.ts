// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'mceryak',
      name: 'cf-full-stack'
    }
  },
  collections: {
    posts: collection({
      label: 'Homes',
      slugField: 'modelNumber',
      path: 'src/content/homes/*',
      // format: { contentField: '' },
      schema: {
        modelNumber: fields.slug({ name: { label: 'Model Number' } }),
        onDisplay: fields.checkbox({ label: 'On Display', defaultValue: false, description: 'On the HAA lot.' })
      },
    }),
  },
});