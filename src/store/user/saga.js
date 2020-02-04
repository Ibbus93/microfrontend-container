import { call, put, takeLatest } from 'redux-saga/effects';

import { TYPES, receivedUser, userError } from './actions';
import { get } from '../../api';

function* fetchUser({ payload: { id }}) {
    try {
        const user = yield call(get, { id });

        yield put(receivedUser({ user }));
    } catch (e) {
        console.error(e);
        yield put(userError(e));
    }
}

const userSagas = [
    takeLatest(TYPES.REQUEST_USER, fetchUser)
];

export default userSagas;
