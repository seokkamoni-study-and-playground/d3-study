import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from './shared/styles/global.style';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyled />
    <App />
  </>,
);
