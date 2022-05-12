import { Text } from 'react-native';

interface Props {
  children: string;
}

export function Body1({ children }: Props) {
  return <Text>{children}</Text>;
}
