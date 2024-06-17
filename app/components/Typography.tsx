import type {ReactNode} from 'react';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'title'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline';

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  title: 'text-4xl font-bold',
  subtitle1: 'text-3xl font-bold',
  subtitle2: 'text-2xl font-bold',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
  overline: 'text-xs uppercase',
};

const variantElements: Record<TypographyVariant, keyof JSX.IntrinsicElements> =
  {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    title: 'h1',
    subtitle1: 'h2',
    subtitle2: 'h3',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
  };

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode | null; // Update the type to allow for null values
  className?: string;
}

const Typography = ({
  variant = 'body1',
  children,
  className,
}: TypographyProps) => {
  const Component = variantElements[variant];
  const classes = `${variantClasses[variant]} ${className || ''}`;

  return <Component className={classes}>{children}</Component>;
};

export default Typography;
