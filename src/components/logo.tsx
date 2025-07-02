import * as React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 80 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#FF3C00" />
        </linearGradient>
      </defs>
      <path
        d="M40 0C40 0 10 30.1818 10 54.5455C10 78.9091 40 96 40 96C40 96 70 78.9091 70 54.5455C70 30.1818 40 0 40 0Z"
        fill="url(#logo-gradient)"
      />
      <path
        d="M29.5 70V42.2L40 57.2L50.5 42.2V70H59V34H51L40 48.4L29 34H21V70H29.5Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
