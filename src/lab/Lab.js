import React from 'react';

const LAB_APPS = {
  color: {
    path: '/lab/color',
    component: React.lazy(() => import('./color/Color')),
  },
  bmp: {
    path: '/lab/bmp',
    component: React.lazy(() => import('./bmp/Bmp')),
  },
  name: {
    path: '/lab/name',
    component: React.lazy(() => import('./name/Name')),
  },
};

const Lab = ({ currentApp }) => {
  const AppComponent = LAB_APPS[currentApp].component;
  return <AppComponent />;
};

export default Lab;
export { LAB_APPS };
