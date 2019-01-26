import React, { useEffect } from 'react';
import { createScript } from '../utils';

export default () => {
    useEffect(() => {
        createScript('https://widgets.healcode.com/javascripts/healcode.js');
    }, []);
    return <healcode-widget data-type="appointments" data-widget-partner="object" data-widget-id="3651762b43a" data-widget-version="0" ></healcode-widget>;
};
