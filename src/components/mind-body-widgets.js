import React, { useEffect } from 'react';
import createScript from '../utils/create-script';

const MindBodyWidget = ({ type, id, version }) => {
    useEffect(() => {
        createScript('https://widgets.healcode.com/javascripts/healcode.js');
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: `<healcode-widget data-type="${type}" data-widget-partner="object" data-widget-id="${id}" data-widget-version="${version}"></healcode-widget>` }} />;;
};

export const EventCalendar = () => <MindBodyWidget type="appointments" id="3651762b43a" version="0" />;
export const YogaCalendar = () => <MindBodyWidget type="schedules" id="3697267b43a" version="1" />;
