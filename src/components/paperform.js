import { useEffect } from 'react';
import { createScript } from '../utils';

export default () => {
    useEffect(() => {
        if (!localStorage.getItem('paperform')) {
            localStorage.setItem('paperform', true);
            createScript('https://paperform.co/__embed');
            setTimeout(() => window.Paperform.popup('you1pfhj'), 1000);
        }
    }, []);
    return null;
};

