import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { Selector } from '../../store/user/reducer';

const Authentication = (WrappedComponent) => (
    (props) => {
        const user = useSelector(Selector.getUser);

        return user.data
            ? <WrappedComponent { ...props } />
            : <Redirect to="/sign-in" />
    }
);

Authentication.propTypes = {
    WrappedComponent: PropTypes.element.isRequired
};

export default Authentication;
