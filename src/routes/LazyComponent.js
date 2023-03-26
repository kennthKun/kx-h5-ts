import React, { lazy, Suspense } from 'react';
import { isDevEnv } from '../consts/env';

const Loading = (props) => {
  const { error } = props;
  const isDev = isDevEnv;
  if (error && isDev) {
    return (
      <div>
        <p>{error.stack ? error.stack : ''}</p>
      </div>
    );
  }
  return <div />;
};

const LazyComponent = (importFunc) => {
  const LazyCom = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<Loading />}>
      <LazyCom {...props} />
    </Suspense>
  );
};

export default LazyComponent;
