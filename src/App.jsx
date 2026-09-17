import React from 'react'
import Router from './router/Router'
import ScrollToTop from './scroll/ScrollToTop';

function App() {
    return (
      <div>
        <ScrollToTop />
        <Router />
      </div>
    );
  }

export default App