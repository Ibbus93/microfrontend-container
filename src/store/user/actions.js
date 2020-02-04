import { createActions } from 'redux-actions';

const DOMAIN = "@user";

const TYPES = {
    REQUEST_USER: `${DOMAIN}/REQUEST_USER`,
    RECEIVED_USER: `${DOMAIN}/RECEIVED_USER`,
    USER_ERROR: `${DOMAIN}/USER_ERROR`
};

const { requestUser, receivedUser, userError } = createActions({
    [TYPES.REQUEST_USER]: null,
    [TYPES.RECEIVED_USER]: ({ user }) => ({ user }),
    [TYPES.USER_ERROR]: ({ error }) => ({ error })
}).user;

export {
    TYPES,
    userError,
    requestUser,
    receivedUser
};
