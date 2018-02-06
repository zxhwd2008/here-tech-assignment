import { createState } from '../utils/createState'

export const Root = createState({
  name: 'root',
  fields: {
    fetching: false,
  },
})
