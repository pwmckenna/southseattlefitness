import React, { useEffect } from 'react';
import { createScript } from '../utils';

export default () => {
  useEffect(() => {
    createScript('https://widgets.healcode.com/javascripts/healcode.js');
  }, []);
  return <healcode-widget data-type="class_lists" data-widget-partner="object" data-widget-id="3641340b43a" data-widget-version="0" ></healcode-widget>;
};
