import {
  rootReducer,
  updateField,
  } from 'modules/Root'
import { ActionType } from 'modules/actions'
import { expect } from 'chai';

describe('rootReducer', () => {
  it('should return action updateField', () => {
    const action = updateField('field', 'value')
    expect(action).to.deep.equal({
      type: ActionType.ROOT.UPDATE_FIELD,
      payload: {
        field: 'field',
        value: 'value',
      },
    })
  })

  it('should call the reducer and update fetching field', () => {
    const action = {
      type: ActionType.ROOT.UPDATE_FIELD,
      payload: {
        field: 'fetching',
        value: true,
      },
    }

    const newState = rootReducer(undefined, action).toJS();

    expect(newState).to.deep.equal({
      fetching: true,
    })
  })
})
