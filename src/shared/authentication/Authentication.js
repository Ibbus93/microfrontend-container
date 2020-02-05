import React from 'react';
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

export default Authentication;
