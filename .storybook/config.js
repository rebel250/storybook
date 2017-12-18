/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { configure } from '@storybook/react';

function loadStories() {
  console.log('running loadStories');
  let req;
  req = require.context('../lib/ui/src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));

  req = require.context('../lib/components/src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
