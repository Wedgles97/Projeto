import { Text } from 'react-native';

interface Props {
  children: string;
}

export function H1({ children }: Props) {
  return <Text>{children}</Text>;
}
