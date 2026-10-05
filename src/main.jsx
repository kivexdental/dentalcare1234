import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import KivexPreviewWrapper from './components/toolbar/KivexPreviewWrapper.jsx';
import './index.css';

// Determine if running inside the preview iframe or directly in standalone mode
const isEmbedded = window.self !== window.top || 
                   window.location.search.includes('preview_embedded=1') ||
                   window.location.search.includes('no_toolbar=true');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isEmbedded ? <App /> : <KivexPreviewWrapper />}
  </React.StrictMode>,
);
