import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
  fonts: {
    title: 'Inter-Black',
    subtitle: 'Inter-SemiBoldItalic',
    text: 'Montserrat-Regular',
  },
};
