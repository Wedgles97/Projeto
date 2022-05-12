import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { usePrepareApp } from '@hooks/usePrepareApp';
import { store } from '@redux/store';
import { Routes } from '@routes/index';
import { light } from '@styles/themes';

export default function App() {
  const { appIsReady, onLayoutRootView } = usePrepareApp();

  if (!appIsReady) return null;
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <Routes onReady={onLayoutRootView} />
      </ThemeProvider>
    </Provider>
  );
}
