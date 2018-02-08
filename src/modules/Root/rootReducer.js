import { createReducer } from 'modules/utils/reducerUtils'
import { ActionType } from 'modules/actions'
import { Root } from './Root'

export const rootReducer = createReducer(Root.create(), {
  [ActionType.ROOT.UPDATE_FIELD]:
  (state, action) => Root[action.payload.field](action.payload.value)(state),
})

export const updateField = (field, value) => ({
  type: ActionType.ROOT.UPDATE_FIELD,
  payload: {
    field,
    value,
  },
})
