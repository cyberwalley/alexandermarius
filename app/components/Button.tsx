import {Link} from '@remix-run/react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  shadow?: boolean;
  className?: string;
  to?: string;
  submit?: boolean;
  icon?: React.ReactNode;
}

const Button = ({
  to,
  children,
  variant,
  shadow,
  className,
  submit,
  icon,
  ...props
}: ButtonProps) => {
  if (to) {
    // If 'to' is provided, render as Link and pass 'to' along with other props
    const linkProps = {to, ...props};
    return (
      <Link
        {...linkProps}
        className={`${
          variant === 'secondary'
            ? 'bg-white border-2'
            : 'bg-[var(--color-secondary)]'
        }  ${
          shadow
            ? 'hover:translate-x-[-5px] transition  hover:translate-y-[5px] hover:shadow-none shadow-3xl border-2  ease-in-out'
            : ''
        } ${className} ${
          icon ? 'flex gap-1' : ''
        } hover:underline inline-block self-center overflow-hidden max-w-full px-5 py-[0.9rem] ring-inset rounded-full border-black font-bold tracking-tight transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus focus-visible:outline hover:ring-1 disabled:hover-ring-0 md:px-6 md:py-3`}
      >
        {children}
        {icon ? icon : null}
      </Link>
    );
  } else {
    // If 'to' is not provided, render as a button
    return (
      <button
        type={submit ? 'submit' : 'button'}
        {...props}
        className={`${
          variant === 'secondary' ? 'bg-white border-2' : 'bg-brand-primary'
        }  ${
          shadow
            ? 'hover:translate-x-[-5px] transition  hover:translate-y-[5px] hover:shadow-none shadow-3xl border-2  ease-in-out'
            : ''
        } ${className} ${
          icon ? 'flex gap-1' : ''
        } text-[16px] inline-block self-center overflow-hidden max-w-full px-5 py-[0.9rem] ring-inset rounded-full border-black font-bold tracking-tight transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus focus-visible:outline hover:ring-1 disabled:hover-ring-0 md:px-6 md:py-3`}
      >
        {children}
        {icon ? icon : null}
      </button>
    );
  }
};

export default Button;
