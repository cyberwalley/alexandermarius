interface FacebookIconProps {
  width?: string;
  height?: string;
}

const FacebookIcon = ({width = '32px', height = '32px'}: FacebookIconProps) => {
  return (
    <svg
      fill="#ffffff"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
    </svg>
  );
};

export default FacebookIcon;
