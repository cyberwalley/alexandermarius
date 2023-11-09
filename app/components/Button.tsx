interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  shadow?: boolean;
  className?: string;
}

const Button = ({children, variant, shadow, className}: ButtonProps) => {
  return (
    <button
      className={`${
        variant === 'secondary'
          ? 'bg-white border-2'
          : 'bg-[var(--color-secondary)]'
      }  ${
        shadow
          ? 'hover:translate-x-[-5px] transition  hover:translate-y-[5px] hover:shadow-none shadow-3xl border-2  ease-in-out'
          : ''
      } ${className} inline-block self-center overflow-hidden max-w-full px-5 py-2 ring-inset rounded-full text-base border-black font-bold tracking-tight transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus focus-visible:outline hover:ring-1 disabled:hover-ring-0 md:px-6 md:py-3 md:text-lg`}
    >
      {children}
    </button>
  );
};

export default Button;
