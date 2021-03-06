import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import { ErrorFallback, FullPageErrorFallback, FullPageSpinner } from 'components/lib';
import Header from 'components/Header';

const Routes = React.lazy(() => import('routes'));

const queryCache = new QueryCache();

function App() {
   return (
      <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
         <ReactQueryCacheProvider queryCache={queryCache}>
            <Router>
               <Header />
               <React.Suspense fallback={<FullPageSpinner />}>
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                     <Routes />
                  </ErrorBoundary>
               </React.Suspense>
            </Router>
            <ReactQueryDevtools initialIsOpen />
         </ReactQueryCacheProvider>
      </ErrorBoundary>
   );
}

export default App;
