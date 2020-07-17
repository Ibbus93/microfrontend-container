import React, { Suspense, useEffect, useState } from 'react';
import withAuth from '../../shared/authentication';

const MicroAccount = React.lazy(() => import("bankAccount/BankAccount"));

const Account = ({ history }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        
        if (auth) {
            setAuth(auth);
            setLoading(false);
        } else {
            history.push('/sign-in')
        }
    }, []);

    return loading
        ? <h2>Loading</h2>
        : (
            <Suspense fallback={null}>
                <MicroAccount auth={auth} history={history} />
            </Suspense>
        )
};

export default withAuth(Account);