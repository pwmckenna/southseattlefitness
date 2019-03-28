import React, { useEffect, useRef } from 'react';
import createScript from './create-script';

// every widget must be created before the healcode code is executed because their webcomponent code is run prior 
// to the attributes being added (which they assume are set)
export default (type, id, version) => {
    if (typeof document === 'undefined') {
        return () => null;
    }
    const widget = document.createElement('healcode-widget');
    widget.setAttribute('data-type', type);
    widget.setAttribute('data-widget-partner', 'object');
    widget.setAttribute('data-widget-id', id);
    widget.setAttribute('data-widget-version', version);

    return () => {
        const ref = useRef();
        useEffect(() => {
            ref.current.appendChild(widget);
            createScript('https://widgets.healcode.com/javascripts/healcode.js');
        }, []);
        return <div ref={ref} />;
    };
}
