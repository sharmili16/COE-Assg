import React, { lazy, Suspense } from 'react';

const LazyForgotPass = lazy(() => import('./ForgotPass'));

const ForgotPass = props => (
  <Suspense fallback={null}>
    <LazyForgotPass {...props} />
  </Suspense>
);

export default ForgotPass;
