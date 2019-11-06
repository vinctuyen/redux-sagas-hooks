/**
 * @author Vinc Tuyen
 */

import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  countRequest: ['count'],
  countSuccess: ['count'],
})

export const CountTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  count: 1,
}

/* ------------- Reducers ------------- */

export const request = state => {
  return { ...state }
}

export const success = (state, { count }) => {
  return { ...state, count, error: null }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.COUNT_REQUEST]: request,
  [Types.COUNT_SUCCESS]: success,
})
