import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { Selector } from '../../store/user/reducer';

const withAuthentication = (WrappedComponent) => (
    (props) => {
        const user = useSelector(Selector.getUser);

        return user.data
            ? <WrappedComponent { ...props } />
            : <Redirect to="/sign-in" />
    }
);

withAuthentication.propTypes = {
    WrappedComponent: PropTypes.element.isRequired
};

export default withAuthentication;
