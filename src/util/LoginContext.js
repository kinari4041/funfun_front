import React from 'react';
import { LoginProvider } from 'util/LoginProvider';
import Home from 'core/Home';

const LoginContext = () => {

    return (
        <div>
            <LoginProvider>
                <Home />
            </LoginProvider>
        </div>
    );
}

export default LoginContext;