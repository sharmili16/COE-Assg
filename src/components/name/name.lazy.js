import React, { lazy, Suspense } from 'react';

const LazyName = lazy(() => import('./Name'));

const Name = props => (
  <Suspense fallback={null}>
    <LazyName {...props} />
  </Suspense>
);

export default Name;
