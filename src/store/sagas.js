import { all } from 'redux-saga/effects';

import userSagas from './user/saga';

function* rootSaga() {
    yield all([
        ...userSagas
    ]);
}

export default rootSaga;
