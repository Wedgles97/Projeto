import { Body1 } from './Body1';
import { H1 } from './H1';

type Variant = 'h1' | 'h2' | 'h3' | 'subheader' | 'highlighter' | 'body1';

interface Props {
  variant: Variant;
  children: string;
}

export function Typography({ variant, children }: Props) {
  if (variant === 'h1') return <H1>{children}</H1>;

  return <Body1>{children}</Body1>;
}
