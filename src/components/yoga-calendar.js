import React, { useEffect } from 'react';
import { createScript } from '../utils';

export default () => {
    useEffect(() => {
        createScript('https://widgets.healcode.com/javascripts/healcode.js');
    }, []);
    return <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="3697267b43a" data-widget-version="1" ></healcode-widget>;
};
