/**
 * @author Vinc Tuyen
 * Saga index: connects action type and saga
 */

import { takeEvery, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { CountTypes } from '../reducers/CountRedux'

/* ------------- Sagas ------------- */
import CountSagas from './CountSagas'

/* ------------- Connect Types To Sagas ------------- */
export default function*  root() {
  yield all ([
    takeEvery(CountTypes.COUNT_REQUEST, CountSagas.increase),
  ])
}
