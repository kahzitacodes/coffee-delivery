import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyles } from './styles/global';
import { Router } from './Router';
import { CartContextProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Toaster />
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
