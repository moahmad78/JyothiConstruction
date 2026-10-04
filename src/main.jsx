import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CRASH:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999999, background: '#0a192f', color: '#f87171', padding: '24px', fontFamily: 'monospace', overflow: 'auto' }}>
          <h2 style={{ fontSize: '18px', color: '#fbbf24', marginBottom: '8px' }}>Application Error</h2>
          <pre style={{ fontSize: '12px', color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

console.log('%c 🛡️ PRECISION ENGINEERED BY SAHIL SHEIKH | IG: @SAHIL_SHEIKH78 ', 'background: #1a1a1a; color: #C5A059; border: 1px solid #C5A059; padding: 8px; font-family: monospace; font-weight: bold; border-radius: 4px;');
console.log('Connect with the creator: https://www.instagram.com/sahil_sheikh78/');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </StrictMode>,
)
