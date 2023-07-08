import type { Plugin } from '@anse-app/plugin-types'
import { handler } from './handler'

const plugin: Plugin = {
  id: 'web-browsing',
  icon: '',
  name: 'web-browsing',
  parameters: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description: 'Web address to be read.',
      },
    },
    required: ['url'],
  },
  handleCall: handler,
}

export default plugin