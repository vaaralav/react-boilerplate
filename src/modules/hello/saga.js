// @flow

import {takeLatest} from 'redux-saga'
import {fork, put} from 'redux-saga/effects'
import {reply} from './actions'

function* sayHelloSaga(): Generator<> {
  yield put(reply('Hello from Redux.'))
}

export default function* (): Generator<> {
  yield [
    fork(function* () {
      yield takeLatest('SAY_HELLO', sayHelloSaga)
    }),
  ]
}
