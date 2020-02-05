import React, { useEffect } from 'react';

const MicroFrontend = ({
    name,
    host,
    path,
    window,
    history,
    handler,
    document,
}) => {
    const renderMicroFrontend = () => {
        window[`render${name}`](`${name}-container`, history, handler);
    };

    const loadScript = (scriptId) => {
        fetch(`${host}/${path}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}${manifest['main.js']}`;
                script.onload = renderMicroFrontend;
                document.head.appendChild(script);
            });
    };

    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        loadScript(scriptId);

        return function cleanup() {
            console.log(`unmount${name}`);
            window[`unmount${name}`](`${name}-container`)
        };
    }, []);

    return (
        <main id={`${name}-container`}/>
    );
};
MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend;
