import type {ReactNode} from 'react';
import { useState } from 'react';

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
  h1: 'font-sans text-[52px] leading-[64px] font-bold',
  h2: 'font-sans text-[36px] font-bold',
  h3: 'font-sans text-[18px] font-bold',
  h4: 'font-sans text-xl font-bold',
  h5: 'font-sans text-lg font-bold',
  h6: 'font-sans text-base font-bold',
  title: 'font-sans text-[52px] leading-[64px] font-bold',
  subtitle1: 'font-sans text-3xl font-bold',
  subtitle2: 'font-sans text-2xl font-bold',
  body1: 'font-sans font-normal leading-[27px] text-[16px]',
  body2: 'font-sans text-sm leading-[27px]',
  caption: 'font-sans text-xs',
  overline: 'font-sans text-xs uppercase',
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
