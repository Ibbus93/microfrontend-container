import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const MicroFrontend = ({
    name,
    host,
    path,
    auth,
    history,
    handler,
    document,
    window
}) => {
    const renderMicroFrontend = () => {
        window[`render${name}`](`${name}-container`, history, handler, auth);
    };

    const loadScript = (scriptId) => {
        fetch(`${host}/${path}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}${manifest['files']['main.js']}`;
                script.onload = renderMicroFrontend;
                document.head.appendChild(script);
            });
    };

    useEffect(() => {
        console.log(name, host, path, auth, history, handler);
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        loadScript(scriptId);

        return function cleanup() {
            window[`unmount${name}`](`${name}-container`)
        };
    }, []);

    return (
        <main id={`${name}-container`}/>
    );
};

MicroFrontend.propTypes = {
    name: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    auth: PropTypes.shape({
        id: PropTypes.string,
        token: PropTypes.string
    }),
    history: PropTypes.any.isRequired,
    handler: PropTypes.func,
    document: PropTypes.any,
    window: PropTypes.any
};

MicroFrontend.defaultProps = {
    auth: {
        id: null,
        token: null
    },
    handler: () => {},
    document,
    window,
};

export default MicroFrontend;
