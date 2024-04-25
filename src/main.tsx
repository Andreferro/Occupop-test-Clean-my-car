import React from 'react';
import ReactDOM from 'react-dom/client';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import Root from './router/index.tsx';
import { AuthProvider } from './context/provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </React.StrictMode>,
);
