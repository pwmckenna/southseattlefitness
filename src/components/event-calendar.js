import React, { useEffect, useRef } from 'react';
import { createScript } from '../utils';

// every widget must be created before the healcode code is executed because their webcomponent code is run prior 
// to the attributes being added (which they assume are set)
const widget = document.createElement('healcode-widget');
widget.setAttribute('data-type', 'appointments');
widget.setAttribute('data-widget-partner', 'object');
widget.setAttribute('data-widget-id', '3651762b43a');
widget.setAttribute('data-widget-version', '0');

export default () => {
    const ref = useRef();
    useEffect(() => {
        ref.current.appendChild(widget);
        createScript('https://widgets.healcode.com/javascripts/healcode.js');
    }, []);
    return <div ref={ref} />;
};
