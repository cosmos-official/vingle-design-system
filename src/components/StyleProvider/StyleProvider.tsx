import { ThemeProvider } from '@emotion/react';
import { type PropsWithChildren } from 'react';

import theme from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';

interface StyleProviderProps extends PropsWithChildren {}

const StyleProvider = ({ children }: StyleProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
