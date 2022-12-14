import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      dir: 'wwwroot',
      empty: true,
      serviceWorker: {
        swSrc: 'src/sw.js'
      },
      baseUrl: 'https://patient.antix.co.uk/',
    },
  ],
};
