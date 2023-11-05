interface BlobIconProps {
  width?: string;
  height?: string;
  className?: string;
}

const BlobIcon = ({width, height, className}: BlobIconProps) => {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 572 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_431_460)">
        <path
          d="M476.567 63.5954C526.69 78.6407 567.504 128.791 571.8 181.091C576.455 233.75 544.591 288.916 527.406 350.888C510.579 413.218 508.073 482.354 473.703 521.042C438.975 559.371 372.742 567.61 319.397 549.699C265.694 531.789 225.596 487.369 178.338 452.98C130.721 418.591 76.6604 393.874 48.0189 350.171C19.3774 306.468 16.5132 244.138 44.7967 202.585C73.0802 161.031 132.869 140.613 181.56 124.851C230.25 109.089 268.2 98.3428 317.249 82.9393C366.298 67.8941 426.087 48.192 476.567 63.5954Z"
          fill="url(#paint0_linear_431_460)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_431_460"
          x1={206.5}
          y1={173}
          x2={521.5}
          y2={686}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#47DDE8" />
          <stop offset={1} stopColor="#5200FF" stopOpacity={0.97} />
        </linearGradient>
        <clipPath id="clip0_431_460">
          <rect
            width={572}
            height={572}
            fill="white"
            transform="translate(0 0.000488281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BlobIcon;
