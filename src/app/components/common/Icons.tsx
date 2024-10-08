'use client';

import { useState } from 'react';

interface IconsProps {
  name: IconPathTypes;
  hoverFill?: string;
  className?: string;
  onClick?: () => void;
}

function Icons({ name, className, hoverFill, onClick }: IconsProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { width, height, fill, path, options } = name;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onClick={onClick}
      fill={isHovered ? hoverFill || fill : fill}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path d={path} {...options} />
    </svg>
  );
}

export default Icons;
