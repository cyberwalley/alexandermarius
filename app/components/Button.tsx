interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({children, variant}: ButtonProps) => {
  return (
    <button
      className={`ease-in-out hover:translate-x-[-5px] hover:translate-y-[5px] transition hover:shadow-none font-bold shadow-5px shadow-3xl border-2  border-black rounded-full min-w-[150px] text-center py-2 h-11 bg-[var(--color-secondary)] whitespace-nowrap inline-block text-[var(--color-main)] mt-6 md:mt-5 md:mb-5 ${
        variant === 'secondary'
          ? 'border-solid border-2 border-white  ease-in-out duration-300 delay-150 '
          : ''
      }'}`}
    >
      {children}
    </button>
  );
};

export default Button;
