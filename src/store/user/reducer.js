import { handleActions } from 'redux-actions';

import { requestUser, receivedUser, userError } from './actions';

const defaultState = {
    isLoading: false,
    data: null
};

const reducer = handleActions({
    [requestUser]: state => Object.assign({}, state, { isLoading: true }),
    [receivedUser]: (state, { payload: { user: { data } } }) => (
        Object.assign({}, state, { data, isLoading: false})
    ),
    [userError]: (state, { payload: { error }}) => ({ isLoading: false, error }),
}, defaultState);

const Selector = {
    getUser: state => state.user
};

export default reducer;

export { Selector };
