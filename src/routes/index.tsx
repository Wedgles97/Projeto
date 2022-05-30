/* eslint-disable @typescript-eslint/no-empty-function */
import { NavigationContainer } from '@react-navigation/native';

import { PrivateRoutes } from './private.routes';
import { PublicRoutes } from './public.routes';

import { useAppSelector } from '../redux/hooks';

interface Props {
  onReady?: () => void;
}

export function Routes(props: Props) {
  // const logged = useAppSelector(state => state.authentication.token);
  const logged = true;
  return (
    <NavigationContainer {...props}>
      {logged ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}

Routes.defaultProps = {
  onReady: () => {},
};
